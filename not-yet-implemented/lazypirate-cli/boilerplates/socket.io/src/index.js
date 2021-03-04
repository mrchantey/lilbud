

const socketClient = require('./socketClient');

let el
window.addEventListener("load", _ => {
    const el = document.createElement("div")
    el.innerHTML = "messages:"
    document.body.appendChild(el)
    socketClient.onDataCallback = (data, socket) => {
        console.log('data received..');
        el.innerHTML += "<br>" + JSON.stringify(data)
        console.dir(data);
    }

    socketClient.start()


})
