

module.exports = {
    start,
    onDataCallback,
    sendData
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