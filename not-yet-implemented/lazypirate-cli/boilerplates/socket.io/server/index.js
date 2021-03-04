const server = require('./server');


server.onDataCallback = (data, socket, id) => {
    console.log(`data received from socket ${id}`);
    console.dir(data);
}

//change hostname to "0.0.0.0" for cross-device access
server.start({ port: 8080, hostname: "localhost" })

let count = 0
setInterval(() => {
    server.sendData({ message: `important data ${count++}` })
}, 1000);