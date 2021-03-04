
const recursive = require('recursive-readdir');
const fs = require('fs');

recursive("./src")
    .then(files => {

        const text = files.reduce((text, f) => {
            f = f.replace(new RegExp('\\\\', 'g'), '/')
            f = f.replace('src', '.')
            return text + '\n' + `require('${f}')`
        }, '')
        fs.writeFileSync('./src/requires.js', text)
        // console.log(text);
        // console.log(files.length + ' registered');
    })


