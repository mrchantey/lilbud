

AFRAME.registerComponent('super-emitter', {
    dependencies: [
        'geometry',
        'sphere-collider',
        'super-hands'],
    // ],
    init() {
        const mesh = this.el.object3DMap.mesh
        this.el.setAttribute('sphere-collider', { objects: '.interactable' })

        //sphere collider will emit 'hit' and 'hitend' events

        //button and mouse events will trigger grab,drag,stretch events 

        mesh.material.transparent = true
        mesh.material.opacity = 0.2
        mesh.material.depthWrite = false

        // mesh.material.color = new THREE.Color().setHSL(Math.random(), 1, 0.5)
        mesh.material.color = new THREE.Color().setHSL(0.5, 1, 0.5)
    }
})

