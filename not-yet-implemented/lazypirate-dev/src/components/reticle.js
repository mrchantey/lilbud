AFRAME.registerComponent('reticle', {
    init() {
        const geometry = new THREE.RingGeometry(0.0005, 0.0008)
        const material = new THREE.MeshBasicMaterial()
        material.color.copy(new THREE.Color(1, 0, 1))
        material.opacity = 0.2
        material.transparent = true
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.z = -0.01
        this.el.setObject3D('reticle', mesh)
        console.log(this);
    },
    tick() {


    }
})