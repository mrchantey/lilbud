
AFRAME.registerComponent('random-walker', {
    schema: {
        maxSpeed: {
            type: 'number',
            default: 0.001
        }
    },
    init() {
        console.log('loading random walker');

        const geometry = new THREE.OctahedronBufferGeometry(0.1)

        const material = new THREE.MeshStandardMaterial()
        material.color.setHSL(Math.random(), 1, 0.5)
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(new THREE.Vector3(0, 1.5, -1))
        this.el.setObject3D('mesh', mesh)
    },
    tick(time, deltaTime) {
        const dPos = this.getRandomDelta3D(deltaTime, this.data.maxSpeed)
        const dRot = this.getRandomDelta3D(deltaTime, this.data.maxSpeed * 100000)
        this.el.object3DMap.mesh.position.add(dPos)
        this.el.object3DMap.mesh.rotateX(dRot.x)
        this.el.object3DMap.mesh.rotateY(dRot.y)
        this.el.object3DMap.mesh.rotateZ(dRot.z)
    },

})
