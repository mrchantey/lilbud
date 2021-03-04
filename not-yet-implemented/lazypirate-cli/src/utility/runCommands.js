const spawn = require('./spawn');


module.exports = async (commandInfos) => {
    for (const commandInfo of commandInfos) {
        await runCommand(commandInfo)
    }
}

async function runCommand(commandInfo) {
    commandInfo.args = commandInfo.args ? commandInfo.args : []
    if (commandInfo.preLog)
        console.log(commandInfo.preLog);
    if (commandInfo.command)
        await spawn(commandInfo.command, commandInfo.args, commandInfo.path)
    if (commandInfo.postLog)
        console.log(commandInfo.postLog);
}
