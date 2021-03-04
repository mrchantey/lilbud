const replaceall = require('replaceall');
const fs = require('fs-extra');
const { Command } = require('commander');
const process = require('process');
const path = require('path');

function createCommand() {
	const cmd = new Command("findReplaceRecursive")
		.requiredOption('--find <str>', "string to find")
		.requiredOption('--replace <str>', "string to replace")
		// .option('-abs --absolute-path', "path provided is absolute")
		.option('--path <str>', "path to search")
		.option('--test', "simply print effected files without editing")
		.option('--depth <int>', "max recursion depth", val => parseInt(val), 2)
		// .option('-ex --exclude <str>', "all excluding file name")
		.option('--include <str>', "only include files which contain the given string")
		.on('--help', () => console.log(`
			this is a sub help
			
			`))
		.action(execute)

	return cmd
}
function execute(args) {
	const dir = args.path == undefined ?
		process.cwd() :
		path.resolve(process.cwd(), args.path)

	// console.log(`directory:\t'${dir}...'\ninclude:\t${args.include}\nfind:\t\t${args.find}\nreplace:\t${args.replace}`);

	let files = getFilesRecursive(dir, args.depth)

	if (args.include !== undefined)
		files = files.filter(path => path.includes(args.include))

	files = files
		.map(path => ({ path, data: fs.readFileSync(path).toString() }))
		.filter(info => info.data.includes(args.find))

	if (args.test) {
		console.log(`-- TEST -- found ${files.length} files to change`);
		console.dir(files.map(f => f.path));
	} else if (files.length === 0) {
		console.log("found no files to replace!");
	} else {
		files.forEach(info => {
			const newData = replaceall(args.find, args.replace, info.data)
			fs.writeFileSync(info.path, newData)
		})
		console.log(`\nreplaced\n${args.find}\nwith\n${args.replace}\nin ${files.length} files`);
	}


}

function getFilesRecursive(parentDir, depth = -1, arr = []) {
	fs.readdirSync(parentDir)
		.forEach(file => {
			const path = `${parentDir}/${file}`
			const stat = fs.statSync(path);
			// console.dir(stat);
			if (!stat.isDirectory())
				arr.push(path)
			else if (depth !== 0)
				arr = getFilesRecursive(path, depth - 1, arr)
		})
	return arr
}


module.exports = {
	createCommand,
	getFilesRecursive,
	execute
}





// 	.filter(path => args.path.includes(".csproj"))
// '<ReferenceOutputAssembly>false</ReferenceOutputAssembly>'