const crossSpawn = require('cross-spawn');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

function spawn({
	command,
	args = [],
	workingDirectory = "./",
	onData = val => process.stdout.write(val)
} = {}) {
	console.log(workingDirectory);
	return new Promise((resolve, reject) => {
		const cmd = crossSpawn(command, args,
			{
				// d
				cwd: workingDirectory
			})
		cmd.stdout.on('data', buff => onData(buff.toString()))
		cmd.stderr.on('data', buff => onData(buff.toString()))
		// cmd.on('message', buff => onData(buff.toString()))
		cmd.on('error', reject)
		cmd.on('exit', resolve)
	});
}


async function gitStatus(workingDirectory) {
	const command = 'git'
	const args = ['status']
	const dir = path.resolve(process.cwd(), workingDirectory)
	// console.dir(dir);
	const stats = {
		directory: workingDirectory,
		status: 'UNKNOWN',
		notes: ''
	}
	const onData = (data) => {
		process.stdout.write(`directory: ${dir}\t\tstatus: `)
		if (
			data.includes('not a git repository ')
		)
			stats.status = 'NOT GIT REPO'
		// data = 
		// 	process.stdout.write(chalk.yellow(`not a git repo`))
		else if (
			data.includes('fatal')
		) {
			stats.status = 'ERROR'
			stats.notes = data
		}
		// process.stdout.write(`error : ${data}`)
		else if (
			data.includes('Changes not staged for commit:')
			|| data.includes('Untracked files:')
		)
			stats.status = 'DIRTY'
		// process.stdout.write(chalk.red('DIRTY'))
		else
			stats.status = 'OK'
		// 	process.stdout.write(chalk.blue('OK'))
		// process.stdout.write('\n')
		// console.log(data);
		// if(data.includes)
		// console.log("\x1b[0m")
	}
	await spawn({ command, args, workingDirectory, onData })
	return stats
}

async function gitMultiStatus(dir) {
	const promises = fs.readdirSync(dir)
		.map(subDir => `${dir}${subDir}`)
		.filter(subDir => fs.lstatSync(subDir).isDirectory())
		.map(subDir => gitStatus(subDir))
	const datas = (await Promise.all(promises).catch(console.eror))
	datas.sort((a, b) => a.status > b.status)
	console.table(datas)
}


async function test() {
	await gitMultiStatus('../')
	// await gitStatus('../')
}

if (require.main === module)
	test()
