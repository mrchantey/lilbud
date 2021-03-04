
const fs = require('fs-extra');

module.exports = (projPath, boilerplateName, isProduction, pkgScripts) => {

    const boilerplatePath =
        (isProduction ? './node_modules/lazypirate-cli/' : './')
        + 'boilerplates/' + boilerplateName

    console.log('\nediting package contents..\n');

    // console.log('\nremoving files\n');
    // removeFiles()

    console.log('\nmoving files\n');
    initFiles(projPath, boilerplatePath)
    console.log('\nediting package.json\n');
    editPackageJson(projPath, pkgScripts)
}

// function removeFiles() {
//     fs.removeSync('./src')
//     fs.removeSync('./dist')
//     fs.removeSync('./webpack.config.js')
// }

function initFiles(projPath, boilerplatePath) {
    fs.copySync(boilerplatePath, projPath)
    // fs.copySync(boilerplatePath + '/src', projPath + '/src')
    // fs.copySync(boilerplatePath + '/dist', projPath + '/dist')
    // fs.copyFileSync(boilerplatePath + '/webpack.config.js', projPath + '/webpack.config.js')
}

function editPackageJson(projPath, scripts) {
    // const pkgPath = process.cwd() + '/package.json'
    projPath = projPath.replace('.', '')
    const pkgPath = process.cwd() + projPath + '/package.json'
    const packageJson = require(pkgPath)
    packageJson.scripts = packageJson.scripts ? packageJson.scripts : {}
    Object.assign(packageJson.scripts, scripts)
    const data = JSON.stringify(packageJson, null, 2)
    fs.writeFileSync(pkgPath, data)
}
