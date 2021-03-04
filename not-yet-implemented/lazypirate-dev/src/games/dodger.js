require('../components/obstacle');

AFRAME.registerComponent('dodger', {
    init() {
        this.el.sceneEl.renderer.setClearColor(new THREE.Color().setHSL(Math.random(), 1, 0.9))
        this.entityCreator = this.el.sceneEl.systems.entityCreator
        // const el = document.createElement('d')
        // el.re

        const self = this
        createPlayer()
        createObstacles()

        function createObstacles() {
            const attributes = [{
                name: 'obstacle',
            }]
            setInterval(() => {
                self.entityCreator.createTriggerEntity({ attributes, geometry: new THREE.TetrahedronGeometry(0.1) })
                    .then(hitEl => {
                        hitEl.addEventListener('collide', e => {

                            const parent = hitEl.parentNode
                            try {

                                parent.removeChild(hitEl)
                            }
                            catch (err) {
                                console.warn('some error dont worry bout', err);
                            }
                        })
                    })
                    .catch(console.error)
            }, 200);

        }


        function createPlayer() {
            const cameraEl = document.querySelector('[camera]')
            // console.log(cameraEl);
            // const attributes = ['wasd-controls']
            // self.entityCreator.createTriggerEntity({ attributes })
            self.entityCreator.createTriggerEntity({ parentEl: cameraEl, position: new THREE.Vector3() })
                // .then(el => {
                // console.log(el.parentElement);
                // cameraEl.setObject3D(el.object3D)
                // el.Object3D.position.copy(new THREE.Vector3())
                // el.addEventListener('collide', e => console.log(e))
                // })
                .catch(console.error)
        }



    }

})