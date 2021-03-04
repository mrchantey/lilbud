

module.exports = {
    start,
    onDataCallback,
    sendData,
    receiveTestData
}

let socket

function start() {
    try {
        socket = io()
        socket.on("data", data => {
            module.exports.onDataCallback(data, socket)
        })
    }
    catch (err) {
        console.log(err);
    }
}

function sendData(data) {
    socket.emit("data", data)
}

function onDataCallback(data, socket) {
    console.log('data received..');
    console.dir(data);
}

function receiveTestData() {
    const testData = {
        mpuData:
        {
            acc: { x: 5732, y: 1484, z: -15816 },
            gyro: { x: -334, y: -195, z: 1 },
            temp: 25
        },
        timeStamp: 661144
    }
    setInterval(_ => {
        testData.timeStamp += 1000
        testData.mpuData.acc.x += getRandom()
        testData.mpuData.acc.y += getRandom()
        testData.mpuData.acc.z += getRandom()
        testData.mpuData.gyro.x += getRandom()
        testData.mpuData.gyro.y += getRandom()
        testData.mpuData.gyro.z += getRandom()
        // console.log('making data callback');
        // console.dir(testData);
        module.exports.onDataCallback(testData)
    }, 1000);
}

function getRandom(max = 10000) {
    return Math.random() * max - max / 2
}