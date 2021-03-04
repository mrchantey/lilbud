const findReplaceRecursive = require('./submodules/findReplaceRecursive');
const gitStatus = require('./submodules/gitStatus');
const manipulateImage = require('./submodules/manipulateImage');
const spawnUtility = require('./submodules/spawnUtility');

module.exports = {
    findReplaceRecursive,
    gitStatus,
    manipulateImage,
    spawnUtility,
    getFilesRecursive: findReplaceRecursive.getFilesRecursive
}