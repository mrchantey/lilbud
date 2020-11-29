#!/usr/bin/env node
// ^ yes this has to be here even in windows because required during installation - https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e


const path = require('path');
const process = require('process');
const { Command } = require('commander');
const findReplaceRecursive = require('./submodules/findReplaceRecursive');
const manipulateImage = require('./submodules/manipulateImage');

const program = new Command("main")

program
	.version(`0.0.1`, '-v -V --version')
	.on('--help', () => console.log(
		`
welcome to lil buddy! your lil buddy
`))
	.option('-d --debug', 'enable debugging')
// .option('-frr --find-replace-recursive', "Find and replace all instances of a string in all files including subdirectories")

program.addCommand(findReplaceRecursive.createCommand())
program.addCommand(manipulateImage.createCommand())


async function run() {
	console.log("lilbud ready to go!");
	await program.parseAsync(process.argv)
	console.log("lilbud all done!");
}

run()

// console.log("Bang!");
// console.dir(findReplaceRecursive);

// if (program.findReplaceRecursive)
// 	findReplaceRecursive.execute(program)

//location of this script: __dirname
//location of working directory: process.cwd()