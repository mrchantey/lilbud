const fs = require('fs-extra');
const init = require('./init');

//delete if path exists
//add make directory command
//call init

module.exports = (createIndex) => {
    const path = getPath(createIndex)
    handleExists(path)

    console.log(path);
    const commands = [
        {
            command: 'mkdir ./' + path
        }
    ]
    init({ path, commands })
}

function getPath(createIndex) {
    if (process.argv.length === createIndex + 1)
        return './new-project'
    const nonFlags = process.argv.filter(a => a != '-f' && a != '-d')
    return './' + nonFlags[createIndex + 1]
}



function handleExists(path) {
    if (fs.existsSync(path)) {
        if (process.argv.includes('-f')) {
            console.log(`removing directory ${path}`);
            fs.removeSync(path)
            return true
        }
        else {
            console.log('path exists, exiting..');
            process.exit()
        }
    }
}