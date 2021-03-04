



AFRAME.registerComponent('physics-example', {
    init() {

        const box = document.createElement('a-box')
        box.addEventListener('loaded', _ => {
            box.object3D.position.copy(new THREE.Vector3(0, 1.6, -2))
            box.object3D.scale.copy(new THREE.Vector3(0.4, 0.4, 0.4))
            box.object3DMap.mesh.material.color.setHSL(Math.random(), 1, 0.5)
            box.setAttribute('dynamic-body', {
                // mass: 1
                linearDamping: 0.8
            })
            // console.log()
        })
        box.addEventListener('body-loaded', _ => {
            // console.log(box.body);
            box.body.collisionResponse = false
        })

        box.addEventListener('collide', e => {
            // box.body.position.y = 1.6
            // box.object3D.position.copy(new THREE.Vector3(0, 1.6, -1))
            console.log('box collided', e);
        }, {
                once: true
            })

        const box2 = document.createElement('a-box')
        box2.setAttribute('wasd-controls', '')
        box2.addEventListener('loaded', _ => {
            box2.object3D.position.copy(new THREE.Vector3(1, 1.6, -2))
            box2.object3D.scale.copy(new THREE.Vector3(0.4, 0.4, 0.4))
            box2.object3DMap.mesh.material.color.setHSL(Math.random(), 1, 0.5)

            box2.setAttribute('dynamic-body', {
                mass: 0
            })
        })

        //physics objects need depth so planes are avoided
        const ground = document.createElement('a-box')
        ground.addEventListener('loaded', _ => {
            ground.object3D.position.copy(new THREE.Vector3(0, 0, 0))
            ground.object3D.scale.copy(new THREE.Vector3(5, 0.2, 5))
            ground.object3DMap.mesh.material.color.setHSL(Math.random(), 1, 0.5)
            ground.setAttribute('static-body', '')
        })

        this.el.sceneEl.renderer.setClearColor('#9b6666')

        this.el.appendChild(box)
        this.el.appendChild(box2)
        this.el.appendChild(ground)


    }




})