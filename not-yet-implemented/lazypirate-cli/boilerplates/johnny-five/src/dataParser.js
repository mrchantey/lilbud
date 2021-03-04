const mpuPlotter = require('./mpuPlotter');

module.exports = createDataParser

async function createDataParser(doMpu) {

    let mpu = await mpuPlotter()
    // console.log(mpu);
    function parseData(data) {
        if (!data.timeStamp) {
            console.warn('no timestamp found');
            return
        }
        if (data.mpuData) {
            mpu.plotData(data.mpuData, data.timeStamp);
        }
    }

    return {
        parseData
    }
}

