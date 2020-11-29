const { Command } = require('commander');
const jimp = require('jimp');
const fs = require('fs-extra');


function createCommand() {
	const cmd = new Command("manipulateImage")
		.requiredOption(`--operation <str>`, "operation to perform [tileImage ]")
		.option("--pathIn <str>", "directory in which to find the image(s)")
		.option("--pathOut <str>", "directory in which to save the image(s)")
		.option("--numColsIn <int>", "number of columns in the input sprite sheet")
		.option("--numRowsIn <int>", "number of rows in the input sprite sheet")
		.option("--numColsOut <int>", "number of columns in the output sprite sheet")
		.option("--numRowsOut <int>", "number of rows in the output sprite sheet")
		.option('--exclude <str>', "exclude files which contain the given string")
		.on('--help', () => console.log(`
Lets manipulate some images!
	`))
		.action(execute)
	return cmd
}

async function execute(args) {
	switch (args.operation) {
		case "tileImage":
			console.log("yesm tiling images");
			args.func = tileImage
			await forEachInDir(args)
			console.log("yesm images tiled");
			return;
		default:
			throw new Error(`Unknown operation type: ${args.operation}`)
	}
}


async function extractSprites(args) {
	const { pathIn, pathOut, imgWidth, imgHeight, numRowsIn, numColsIn } = args
	const sprites = []
	const img = await jimp.read(pathIn)
	for (let row = 0; row < numRowsIn; row++) {
		for (let col = 0; col < numColsIn; col++) {
			// const i = col + row * numColsIn
			const x = col * imgWidth
			const y = row * imgHeight
			sprites.push(img.clone()
				.crop(x, y, imgWidth, imgHeight))
		}
	}
	return sprites
}


async function createSpriteSheet({ sprites, numColsOut, numRowsOut, widthOut, heightOut, invert, normalize }) {
	const imgWidth = sprites[0].bitmap.width
	const imgHeight = sprites[0].bitmap.height
	const sheetWidth = numColsOut * imgWidth
	const sheetHeight = numRowsOut * imgHeight
	const img = await jimp.create(sheetWidth, sheetHeight)

	for (let i = 0; i < sprites.length; i++) {
		const col = i % numColsOut
		const row = Math.floor(i / numColsOut)
		const x = col * imgWidth
		const y = row * imgHeight
		img.blit(sprites[i], x, y)
	}
	if (widthOut !== undefined && heightOut !== undefined)
		img.scaleToFit(widthOut, heightOut)
	// img.resize()
	if (invert === true)
		img.invert()
	if (normalize === true)
		img.normalize()
	return img
}

async function reorderSpriteSheet(args) {
	const { debug } = args
	args.sprites = await extractSprites(args)
	if (debug) console.log(`manipulateImage - sprites extracted..`);
	const spriteSheet = await createSpriteSheet(args)
	if (debug) console.log(`manipulateImage - spritesheet created..`);
	await spriteSheet.write(args.pathOut)
	if (debug) console.log(`manipulateImage - complete`);
	// console.log(sprites.length);
	// const path = `${pathOut.replace('.png', `_${i}.png`)}`
}


async function importImageSequence({ pathIn }) {
	const promises = fs
		.readdirSync(pathIn)
		.sort()
		.map(f => jimp.read(`${pathIn}/${f}`))
	const images = await Promise.all(promises)
	return images
}

async function exportImageSequence({ sprites, pathOut }) {
	sprites.forEach((sp, i) => sp.write(`${pathOut}/img_${('000' + i).substr(-3)}.png`));
}

module.exports = {
	createCommand,
	execute
}

// async function testWriteImageSequence() {
// 	const args = {
// 		debug: true,
// 		pathIn: "./test/sig.png",
// 		// pathOut: "./test/output/sig.png",
// 		pathOut: "./test/output",
// 		imgWidth: 846,
// 		imgHeight: 174,
// 		numRowsIn: 29,
// 		numColsIn: 1,
// 		numRowsOut: 5,
// 		numColsOut: 6,
// 		normalize: true
// 		// widthOut: 4096,
// 		// heightOut: 4096
// 	}

// 	const sprites = await extractSprites(args)
// 	const { pathOut } = args
// 	await exportImageSequence({ sprites, pathOut })
// 	// reorderSpriteSheet(args)
// 	// 	.then(_ => console.log("complete"))
// 	// execute()
// }

async function testImportImageSequence() {

	const args = {
		pathIn: "./test/signatures/1-6",
		pathOut: "./test/output/sheet.png",
		numColsOut: 4,
		numRowsOut: 16,
		widthOut: 4096,
		heightOut: 4096
	}

	const sprites = await importImageSequence(args)
	const spriteSheet = await createSpriteSheet({ ...args, sprites })
	await spriteSheet.write(args.pathOut)
}


async function tileImage({ pathIn, pathOut, numColsOut, numRowsOut }) {
	const imgIn = await jimp.read(pathIn)
	const sheetWidth = imgIn.bitmap.width * numColsOut
	const sheetHeight = imgIn.bitmap.height * numRowsOut
	const imgOut = await jimp.create(sheetWidth, sheetHeight)
	for (let x = 0; x < numColsOut; x++) {
		for (let y = 0; y < numRowsOut; y++) {
			const posX = x * imgIn.bitmap.width
			const posY = y * imgIn.bitmap.height
			imgOut.blit(imgIn, posX, posY)
		}
	}
	await imgOut.write(pathOut)
}

async function testTileImages() {
	const args = {
		pathIn: "./test/untiled-images",
		pathOut: "./test/tiled-images",
		numColsOut: 4,
		numRowsOut: 1,
	}
	args.func = tileImage
	await forEachInDir(args)
}

async function forEachInDir(args) {
	const { pathIn, pathOut, func, exclude } = args
	await Promise.all(fs
		.readdirSync(pathIn)
		.filter(val => !val.includes(exclude))
		.map(async fn => await func({
			...args,
			pathIn: `${pathIn}/${fn}`,
			pathOut: `${pathOut}/${fn}`,
		}))
	)
}


async function testImportSignatures() {
	const args = {
		pathIn: "./test/signatures",
		pathOut: "./test/signatures_out",
		numColsOut: 5,
		numRowsOut: 14,
		widthOut: 4096,
		heightOut: 4096
	}

	const dirs = await fs.readdirSync(args.pathIn)
	const sigDatas = dirs.map(d => {
		const split = d.split("-")
		const id = split[0]
		const numLoopFrames = split[1]
		return {
			...args,
			id,
			pathIn: `${args.pathIn}/${d}`,
			pathOut: `${args.pathOut}/${id}.png`,
			numLoopFrames
		}
	})

	const sigDatasSimple = await Promise.all(sigDatas.map(async sd => {
		const sprites = await importImageSequence(sd)
		const spriteSheet = await createSpriteSheet({ ...sd, sprites })
		await spriteSheet.write(sd.pathOut)
		return {
			id: sd.id,
			numFrames: sprites.length,
			numLoopFrames: sd.numLoopFrames,
		}
	}))

	const jsonData = {
		numCols: args.numColsOut,
		numRows: args.numRowsOut,
		signatureDatas: sigDatasSimple
	}
	fs.writeFileSync(`${args.pathOut}/data.json`, JSON.stringify(jsonData, null, 2))


}

if (require.main === module)
	// testImportImageSequence()
	// testImportSignatures()
	testTileImages()
	// test()