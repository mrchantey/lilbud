const AFRAME = require('aframe');
require('./components/message-logger')
require('./components/ground')
require('./components/mystical-anomoly')


window.addEventListener('load', onload)
function onload() {
    const sceneEl = document.createElement('a-scene')
    document.body.appendChild(sceneEl)
    sceneEl.addEventListener('renderstart', () => {
        sceneEl.setAttribute('message-logger', 'ahoyhoy world')
        sceneEl.setAttribute('ground', {})
        sceneEl.setAttribute('mystical-anomoly', {})
        sceneEl.renderer.setClearColor('#CE5E1F')
    })
}