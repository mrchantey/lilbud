AFRAME.registerComponent('mystical-anomoly', {
    init() {
        const geometry = new THREE.TetrahedronGeometry(0.2)
        const material = new THREE.MeshNormalMaterial()
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(new THREE.Vector3(-0.4, 1.6, -1))
        this.el.setObject3D('mysteryMesh', mesh)
    },
    tick() {
        this.el.object3DMap.mysteryMesh.rotateX(0.01)
        this.el.object3DMap.mysteryMesh.rotateY(0.01)
    }
})
