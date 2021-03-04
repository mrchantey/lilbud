



AFRAME.registerSystem('entityCreator', {
    createEntity(args) { return this.__internalCreateEntity(args === undefined ? {} : args) },
    __internalCreateEntity({
        parentEl = document.querySelector('a-scene'),
        tagName = 'a-entity',
        position = new THREE.Vector3(0, 1.5, -1.5),
        // scale = new THREE.Vector3(0.3, 0.3, 0.3),
        color = new THREE.Color().setHSL(Math.random(), 1, 0.7),
        geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3),
        material = new THREE.MeshStandardMaterial(),
        attributes = [
            {
                name: 'class',
                value: 'created-entity'
            }
        ],
    }) {
        // console.log(parentEl);
        return new Promise((resolve, reject) => {
            const el = document.createElement(tagName)
            // console.log(el);

            // defaultAttributes.forEach(a => el.setAttribute(a.name, a.value))
            // console.log(attributes);
            parentEl.appendChild(el)
            el.addEventListener('loaded', () => {
                // el.setAttribute('dynamic-body', '')
                // console.log('bang');
                material.color.copy(color)
                const mesh = new THREE.Mesh(geometry, material)
                el.setObject3D('mesh', mesh)
                el.object3D.position.copy(position)
                attributes.forEach(a => {
                    if (typeof (a) === 'string')
                        el.setAttribute(a, '')
                    else
                        el.setAttribute(a.name, a.value === undefined ? '' : a.value)
                })
                resolve(el)
            });

        })
    },
    createPhysicsEntity() {

    },
    createTriggerEntity(args) {
        return new Promise((resolve, reject) => {
            this.createEntity(args)
                .then(el => {
                    //listen for event before adding physics-body
                    el.addEventListener('body-loaded', _ => {
                        el.body.collisionResponse = false
                        resolve(el)
                    })
                    //body must be added after object3d mesh
                    el.setAttribute('dynamic-body', { mass: 0 })
                })
        })
    },
    appendSuperhandsMouseCursor() {
        const cameraEl = document.querySelector('[camera]')
        // cameraEl.setAttribute('raycaster', { objects: '.interactable' })
        cameraEl.setAttribute('cursor', { rayOrigin: 'mouse' })
        cameraEl.setAttribute('look-controls', { enabled: false })
        cameraEl.setAttribute('super-hands', {
            colliderEvent: 'raycaster-intersection',
            colliderEventProperty: 'els',
            colliderEndEvent: 'raycaster-intersection-cleared',
            colliderEndEventProperty: 'clearedEls'
        })
        return cameraEl
    },

})