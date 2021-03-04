#!/usr/bin/env node

//to test run 
//node index.js create testDir p5 -d

const create = require('./src/create');
const init = require('./src/init');
const help = require('./src/utility/help');

start()
    .catch(console.error)

async function start() {
    // const initIndex = process.argv.indexOf('init')
    const createIndex = process.argv.indexOf('create')
    const initIndex = process.argv.indexOf('init')
    if (createIndex != -1)
        await create(createIndex)
    else if (initIndex != -1)
        await init()
    else {
        console.log(help);
    }
}
