const messageListener = require('./messageListener');
// const plotter = require('./plotter');
const DataParser = require('./dataParser');

window.addEventListener('load', start)


async function start() {
    // dataParser.init(true)
    const dataParser = await DataParser(true)
    // messageListener.onDataCallback = plotter.appendDataSource
    messageListener.onDataCallback = dataParser.parseData
    // messageListener.beginDataTest();
    messageListener.connect()
}