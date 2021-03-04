AFRAME.registerComponent('ground', {
    init() {
        const geometry = new THREE.PlaneGeometry(5, 5)
        const material = new THREE.MeshBasicMaterial()
        material.color.copy(new THREE.Color('#3387CE'))
        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotateX(-Math.PI / 2)
        this.el.setObject3D('ground', mesh)
    }
})
