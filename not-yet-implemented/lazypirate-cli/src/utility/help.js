const rottenSkallywag = require('./rottenSkallywag');


const help = `
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
welcome to lazy pirate!
The must have npm tool for lazy pirates

boilerplates:
aframe
webpack
p5
socket.io
johnny-five

begin by typing the following:

${''/*lazypirate [instruction (init/create)] [filePath(for create)] [boilerplate]*/}
npx lazypirate init [boilerplate]

command example:
npx lazypirate init p5      //initializes simple p5 app in working directory

Please note that using the init command will completely rearrange the working directory so best to use in an empty one :)
${rottenSkallywag}
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
`

module.exports = help

if (require.main === module)
    console.log(help);