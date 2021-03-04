

AFRAME.registerComponent('bow-geometry', {
    dependencies: [
        'super-listener']
    ,
    init() {
        const material = this.el.object3DMap.mesh.material
        material.opacity = 0
        material.transparent = true
        material.depthWrite = false

        const mat = new THREE.MeshStandardMaterial()
        const geomMid = new THREE.BoxGeometry(0.1, 0.8, 0.1)
        const meshMid = new THREE.Mesh(geomMid, mat)
        this.el.setObject3D('bow-mid', meshMid)

        const geomTop = new THREE.BoxGeometry(0.1, 0.1, 0.4)
        const meshTop = new THREE.Mesh(geomTop, mat)
        this.el.setObject3D('bow-top', meshTop)
        meshTop.position.copy(new THREE.Vector3(0, 0.45, 0.15))

        const geomBottom = new THREE.BoxGeometry(0.1, 0.1, 0.4)
        const meshBottom = new THREE.Mesh(geomBottom, mat)
        meshBottom.position.copy(new THREE.Vector3(0, -0.45, 0.15))
        this.el.setObject3D('bow-bottom', meshBottom)


        const geomString = new THREE.BoxGeometry(0.04, 0.8, 0.04)
        const meshString = new THREE.Mesh(geomString, mat)
        meshString.position.copy(new THREE.Vector3(0, 0, 0.35))
        this.el.setObject3D('bow-string', meshString)

        // this.data.nockedArrows = []
        // this.data.drawingHand = undefined

        // this.el.addEventListener('hover-start', e => {
        //     const arrowHand = e.detail.hand.components['arrow-hand']
        //     if (arrowHand) {
        //         arrowHand.data.arrows.forEach(a => {
        //             // a.data.bow = this.el
        //             this.data.nockedArrows.push(a)
        //             arrowHand.removeArrow(a)
        //         })
        //     }
        // })
        // this.el.addEventListener('drag-start', e => {
        //     this.data.drawingHand = e.detail.hand
        //     // const arrowHand = e.detail.hand.components['arrow-hand']
        //     // if (arrowHand) {
        //     // this.dat
        //     // arrowHand.data.arrows.forEach(a => {
        //     //     a.data.bow = this.el
        //     // })
        //     // }
        // })

        // this.el.addEventListener('drag-end', e => {
        //     this.data.drawingHand = undefined
        // })
        // //     this.el.sceneEl.systems.archery
        // //         .onBowHoverStart(this.el, e.detail.hand))
        // // this.el.addEventListener('hover-end', e =>
        // //     this.el.sceneEl.systems.archery
        // //         .onBowHoverEnd(this.el, e.detail.hand))

    },
    tick() {
        // const hand = this.data.drawingHand,
        //     bowString = this.el.object3DMap['bow-string']
        // if (hand) {
        //     // console.log(hand.object3D.position);
        //     const handWorld = hand.object3D.position.clone()
        //     const handLocal = this.el.object3D.worldToLocal(handWorld.clone())
        //     bowString.position.copy(handLocal)
        //     this.data.nockedArrows.forEach(a => {
        //         // a.object3D
        //     })

        //     //     // const bowWorld = this.el.object3D.getWorldPosition()
        //     console.log(handWorld);
        //     this.el.object3D.lookAt(handWorld)
        // }


        // //     console.log(handWorld);

        // //     // const deltaHandBow = handWorld.clone().sub(bowWorld)
        // //     // const dirHandBow = deltaHandBow.normalize().add(bowWorld)

        // // }

    },

})