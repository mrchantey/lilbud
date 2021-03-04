const AFRAME = require('aframe');
require('aframe-physics-system')
require('super-hands')
require('aframe-extras');//for sphere-collider
require('./requires')


const setPhysicsSettings = require('./physics-settings');

const lazyPirateSettings = {
    components: [
        // 'dodger'
        // 'video-360-example'
        'bow-and-arrow-example'
        // 'super-hands-mouse-example'
        // 'hello-world',
        // 'collision-example'
        // 'physics-example'
        // 'random-walker'
    ]
}


window.addEventListener('load', _ => {
    const sceneEl = document.createElement('a-scene')
    //debug should be turned off in production, enables component-to-dom serialization at extreme performance cost
    sceneEl.setAttribute('debug', '')


    //physics settings need to be set before 'loaded'
    setPhysicsSettings(sceneEl)
    document.body.appendChild(sceneEl)
    //camera loaded after 'loaded' and before 'renderstart'
    sceneEl.addEventListener('renderstart', _ => {
        lazyPirateSettings.components.forEach(c => sceneEl.setAttribute(c, ''))
    })

})