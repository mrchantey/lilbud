
const runCommands = require('./runCommands');

module.exports = () => {


    const commands = [
        {
            preLog: 'running command 1',
            command: 'echo',
            args: ['bang bang bang'],
            postLog: 'command 1 completed'
        },
        {
            preLog: 'running command 2',
            command: 'echo',
            args: ['bang boom pow bang'],
            postLog: 'command 2 completed'
        }

    ]

    runCommands(commands).then(() => console.log('all done'))
}