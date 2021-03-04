


AFRAME.registerComponent('obstacle', {
    init() {
        // this
        // this
        const max = 0.06
        const hmax = max / 2
        this.data.deltaRot = new THREE.Vector3(Math.random() * max - hmax, Math.random() * max - hmax, Math.random() * max - hmax)
        const offsetX = Math.random() * 2 - 1
        const offsetY = Math.random() * 0.8 - 0.4
        const newPos = new THREE.Vector3(offsetX, 1.6 + offsetY, -5)
        this.el.object3D.position.copy(newPos)
        // this.el.object3DMap.mesh.material.color.setHSL(1, 1, 0)//.position.x += 2
        // setTimeout(() => {
        // }, 1000)
        // console.log(this.el.object3DMap)
    }, tick() {
        this.el.object3D.position.z += 0.01
        this.el.object3D.rotateX(this.data.deltaRot.x)
        this.el.object3D.rotateY(this.data.deltaRot.y)
        this.el.object3D.rotateZ(this.data.deltaRot.z)
        if (this.el.object3D.position.z > 0)
            this.el.parentElement.removeChild(this.el)
    },
    remove() {
        console.log('obstacle removed');
    }


})