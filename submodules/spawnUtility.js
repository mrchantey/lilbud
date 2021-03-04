const crossSpawn = require('cross-spawn');
function spawn({
    command,
    args = [],
    workingDirectory = "./",
    onData = val => process.stdout.write(val),
    // onError = val => process.stderr.write(val),
} = {}) {

    return new Promise((resolve, reject) => {
        const cmd = crossSpawn(command, args,
            {
                cwd: workingDirectory
            })
        cmd.stdout.on('data', buff => onData(buff.toString()))
        cmd.stderr.on('data', buff => onData(buff.toString()))
        // cmd.stderr.on('data', buff => onError(buff.toString()))
        cmd.on('message', buff => onData(buff.toString()))
        cmd.on('error', reject)
        cmd.on('exit', resolve)
    });
}


// async function promiseSeries(promises) {
//     for (let i = 0; i < promises.length; i++) {
//         await promises[i]
//     }
// }


function spawnArray({
    commands = [],
    workingDirectory = "./",
    onData = val => process.stdout.write(val),
    // executeInSeries = false
}) {
    const promises = commands
        .map(command => {
            const sep = command.split(' ')
            return spawn({
                command: sep[0],
                args: sep.slice(1),
                workingDirectory,
                onData
            })
        })
    return Promise.all(promises)
}

module.exports = {
    spawn,
    spawnArray
}

if (require.main === module) {
    spawn({ command: 'powershell', args: ['ls'] })
}