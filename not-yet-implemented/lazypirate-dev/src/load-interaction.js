const AFRAME = require('aframe');
const createCursor = require('./factories/cursor');
require('super-hands')

require('./components/reticle');

const supportedControllers = ['daydream-controls', 'windows-motion-controls', 'vive-controls', 'gearvr-controls', 'oculus-touch-controls']

module.exports = async _ => {
    const sceneEl = document.querySelector('a-scene')
    sceneEl.renderer.setClearColor('#6DBD89')

    // const cursor = createCursor()
    // cursor.addEventListener('mousedown', _ => console.log('mouse down'))


    // window.addEventListener('gamepadconnected', e => {
    //     console.log('gamepad connected!');
    //     // console.log(e);
    // })
    sceneEl.appendChild(createInteractable())
    sceneEl.appendChild(createController('left'))
    sceneEl.appendChild(createController('right'))
}

function createInteractable() {
    const box = document.createElement('a-box')
    box.setAttribute('hoverable', '')
    box.setAttribute('grabbable', '')
    box.setAttribute('stretchable', '')
    box.setAttribute('draggable', '')
    box.setAttribute('droppable', '')
    box.setAttribute('wasd-controls', '')
    box.addEventListener('loaded', _ => {
        box.object3D.position.copy(new THREE.Vector3(0, 1.3, 0))
        box.object3D.scale.copy(new THREE.Vector3(0.3, 0.3, 0.3))
        box.object3DMap.mesh.material.color.copy(new THREE.Color(1, 0.5, 1))
    })
    return box
}

function createController(hand) {
    const controller = document.createElement('a-entity')
    controller.setAttribute('sphere-collider', 'objects: a-box')
    console.log(controller);
    controller.setAttribute('super-hands', '')
    // controller.setAttribute('tracked-controls', `hand:${hand}`)
    supportedControllers.forEach(c => controller.setAttribute(c, `hand:${hand}`))
    return controller
}