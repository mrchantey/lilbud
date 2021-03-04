const readLine = require('readline')


exports = question => {
    return new Promise((resolve, reject) => {
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(question, resolve);
    })
}
