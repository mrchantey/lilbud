

AFRAME.registerComponent('collision-example', {
    init() {
        const sceneEl = this.el.sceneEl
        // const x = document.querySelector('[camera]')
        // var cameraEl = document.querySelector('[camera]');
        // cameraEl.removeAttribute('wasd-controls');
        // console.log(cameraEl);
        document.querySelector('[camera]').setAttribute('wasd-controls', { enabled: false })
        sceneEl.systems.entityCreator
        sceneEl.renderer.setClearColor(new THREE.Color().setHSL(Math.random(), 1, 0.9))

        sceneEl.systems.entityCreator.createTriggerEntity()
            .then(el => {
                el.object3D.position.x = -0.2
                // console.log(el.object3DMap.mesh.material);
                el.addEventListener('collide', e => el.object3DMap.mesh.material.color.setHSL(127, 1, 0.4), {
                    once: true
                })
            })
        sceneEl.systems.entityCreator.createTriggerEntity()
            .then(el => {
                el.object3D.position.x = 0.2
                el.setAttribute('wasd-controls', '')
                el.addEventListener('collide', e => console.log('collision!', e))
            })
    }
})