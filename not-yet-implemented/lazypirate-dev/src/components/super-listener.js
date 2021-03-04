

AFRAME.registerComponent('super-listener', {
    dependencies: ['geometry'],
    schema: {
        debug: {
            type: 'bool',
            default: true
        },
        interactions: {
            type: 'array',
            // default: ['hoverable', 'grabbable', 'stretchable', 'draggable', 'droppable']
            default: []
        }
    },
    init() {
        const el = this.el
        const mesh = el.object3DMap.mesh
        mesh.material.opacity = 0.6
        mesh.material.transparent = true
        mesh.material.depthWrite = false
        mesh.material.color = new THREE.Color().setHSL(1, 1, 0.5)
        const interactions = this.data.interactions
        el.setAttribute('class', 'interactable')
        interactions.forEach(i => el.setAttribute(i, ''))

        if (this.data.debug) {

            // if (interactions.includes('hoverable')) {
            el.addEventListener('hover-start', e => {
                console.log('hover-start');
                // console.log(this.el);
                // console.log(e.detail.hand);
                mesh.material.opacity = 0.3
                // mesh.material.color.copy(new THREE.Color(0, 0.2, 0))
                // console.log('hover start')
            })
            el.addEventListener('hover-end', _ => {
                console.log('hover-end');
                mesh.material.opacity = 0.6
                // mesh.material.color.copy(new THREE.Color(0, 0.2, 0))
                // console.log('hover start')
            })
            // }
            // if (interactions.includes('grabbable')) {
            el.addEventListener('grab-start', _ => {
                console.log('grab-start');
                mesh.material.wireframe = true
            })
            el.addEventListener('grab-end', _ => {
                console.log('grab-end');
                mesh.material.wireframe = false
            })
            // }
            // if (interactions.includes('draggable')) {
            el.addEventListener('drag-start', _ => {
                console.log('drag-start');
                mesh.material.wireframe = true
            })
            el.addEventListener('drag-end', _ => {
                console.log('drag-end');
                mesh.material.wireframe = false
            })
            el.addEventListener('dragover-start', _ => {
                console.log('dragover-start');
                mesh.material.wireframe = true
            })
            el.addEventListener('dragover-end', _ => {
                console.log('dragover-end');
                mesh.material.wireframe = false
            })
            el.addEventListener('drag-drop', _ => {
                console.log('drag-drop');
                mesh.geometry = new THREE.TetrahedronBufferGeometry(0.25)
            })
            // }
        }
    }
})