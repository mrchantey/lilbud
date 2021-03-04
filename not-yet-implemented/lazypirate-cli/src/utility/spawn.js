const crossSpawn = require('cross-spawn');

module.exports = (command, args = [], path) => {
    path = path === undefined ? './' : path
    return new Promise((resolve, reject) => {
        const cmd = crossSpawn(command, args,
            {
                stdio: [process.stdin, process.stdout, process.stderr],
                cwd: path
            })
        // cmd.stdout.on('data', buff => console.log(buff.toString()))
        // cmd.stdio.on('data', buff => console.log(buff.toString()))
        // cmd.stderr.on('data', buff => console.error(buff.toString()))
        // cmd.on('message', buff => console.log(buff.toString()))
        cmd.on('error', reject)
        cmd.on('exit', resolve)
    });
}
