const runCommands = require('./utility/runCommands');
const scallywag = require('./utility/rottenSkallywag');
const projectFilesEdit = require('./utility/project-files-edit');

//add commmands:
//npm init
//webpack dev dependencies
//


module.exports = async ({ path = "./", commands = [] } = {}) => {
    const isProduction = !process.argv.includes('-d')
    const isWebpack = process.argv.includes('webpack')
    const isAframe = process.argv.includes('aframe')
    const isSocketIO = process.argv.includes('socket.io')
    const isJohnnyFive = process.argv.includes('johnny-five')
    const isP5 = process.argv.includes('p5')

    commands = commands.concat([{
        path,
        preLog: 'initializing package',
        command: 'npm',
        args: ['init', '-y'],
        postLog: 'package initialized'
    },
    {
        preLog: scallywag
    }])

    if (isWebpack || isAframe || isSocketIO || isJohnnyFive || isP5) {
        commands.push({
            path,
            preLog: 'installing dev dependencies, this can take a few minutes..\n'
            , command: 'npm',
            args: ['install', '-D', 'webpack', 'webpack-cli', 'webpack-dev-server', 'source-map-loader']
        })
    }
    if (isAframe) {
        commands.push({
            path,
            preLog: 'installing dependencies, this can take a few minutes..\n',
            command: 'npm',
            args: ['install', 'aframe']
        })
    }
    if (isSocketIO) {
        commands.push({
            path,
            preLog: 'installing dependencies, this can take a few minutes..\n',
            command: 'npm',
            args: ['install', 'express', 'socket.io', 'opn']
        })
    }
    if (isJohnnyFive) {
        commands.push({
            path,
            preLog: 'installing dependencies, this can take a few minutes..\n',
            command: 'npm',
            args: ['install', 'express', 'socket.io', 'opn', 'firmata-party', 'plotly.js-dist', 'johnny-five']
        })
    }
    if (isP5) {
        commands.push(
            {
                path,
                preLog: 'installing dependencies, this can take a few minutes..\n',
                command: 'npm',
                args: ['install', 'p5']
            })
    }

    await runCommands(commands)

    if (isWebpack)
        projectFilesEdit(path, 'webpack', isProduction, { start: 'webpack-dev-server --open', build: 'npx webpack' })
    else if (isAframe)
        projectFilesEdit(path, 'aframe', isProduction, { start: 'webpack-dev-server --open', build: 'npx webpack' })
    else if (isP5)
        projectFilesEdit(path, 'p5', isProduction, { start: 'webpack-dev-server --open', build: "node ./build-tools/cdn-on && npx webpack", cdnoff: "node ./build-tools/cdn-off" })
    else if (isSocketIO)
        projectFilesEdit(path, 'socket.io', isProduction, { start: 'node server/index.js --open', build: 'npx webpack' })
    else if (isJohnnyFive)
        projectFilesEdit(path, 'johnny-five', isProduction, { start: 'node server/index.js --open', prepareBoard: 'npx firmata-party uno --debug' })
    console.log(
        `

all done,to begin run the following:

${path === './' ? '' : `cd ${path}`}
npm start

`)
}
