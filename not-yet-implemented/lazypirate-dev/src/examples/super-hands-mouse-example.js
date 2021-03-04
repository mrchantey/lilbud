

AFRAME.registerComponent('super-hands-mouse-example', {
    init() {
        const sceneEl = this.el.sceneEl
        const entityCreator = sceneEl.systems.entityCreator
        sceneEl.renderer.setClearColor(new THREE.Color().setHSL(Math.random(), 1, 0.9))

        const cameraEl = entityCreator.appendSuperhandsMouseCursor()
        // console.log(el);
        entityCreator.createSuperhandsInteractable({ position: new THREE.Vector3(-0.2, 1.5, -1.5) })
            .catch(console.error)
        entityCreator.createSuperhandsInteractable({ position: new THREE.Vector3(0.2, 1.5, -1.5) })
    }




})