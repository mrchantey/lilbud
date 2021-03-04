

AFRAME.registerComponent('bow-and-arrow-example', {
    init() {
        const entityCreator = this.el.sceneEl.systems.entityCreator
        const sceneEl = this.el.sceneEl

        sceneEl.renderer.setClearColor(new THREE.Color().setHSL(0.4, 1, 0.95))
        document.querySelector('[camera]').setAttribute('wasd-controls', { enabled: false })

        const itemEquipSystem = sceneEl.systems['item-equip']
        const arrowNockSystem = sceneEl.systems['arrow-nock']
        const arrowLooseSystem = sceneEl.systems['arrow-loose']


        const bow = createBow()
        const arrow = createArrow()
        arrow.addEventListener('loaded', _ => setTimeout(createHands, 0))
        sceneEl.appendChild(bow)
        sceneEl.appendChild(arrow)


        function createBow() {
            const bow = document.createElement('a-entity')
            bow.setAttribute('position', new THREE.Vector3(-0.7, 1.5, -1))
            bow.setAttribute('geometry', {})
            bow.setAttribute('scale', { x: 0.3, y: 0.3, z: 0.3 })
            bow.setAttribute('bow-geometry', '')

            bow.setAttribute('super-listener', { debug: false })
            itemEquipSystem.registerEquippable(bow)
            bow.addEventListener('on-equip', e => arrowNockSystem.registerNockableBow(bow))
            return bow
        }


        function createArrow() {
            const arrow = document.createElement('a-entity')
            arrow.setAttribute('position', new THREE.Vector3(0.7, 1.5, -1))
            arrow.setAttribute('geometry', {})
            arrow.addState('arrow')
            arrow.setAttribute('scale', { x: 0.1, y: 0.1, z: 0.3 })
            // arrow.setAttribute('simple-physics', '')
            arrow.setAttribute('super-listener', { debug: false })

            // arrowLooseSystem.registerArrowLoose({ arrow })
            itemEquipSystem.registerEquippable(arrow)
            return arrow
        }

        function createHands() {
            const rightControls = ['i', 'u', 'j', 'k', 'l', 'o', '8', '7', '9']
            const rightX = 0.7
            createHand(rightControls, rightX)
            const leftControls = ['w', 'q', 'a', 's', 'd', 'e', '2', '1', '3']
            const leftX = -0.7
            createHand(leftControls, leftX)
        }

        function createHand(controls, xPos) {
            const hand = document.createElement('a-entity')
            hand.setAttribute('scale', { x: 0.3, y: 0.3, z: 0.3 })
            hand.setAttribute('geometry', {})
            // hand.setAttribute('material', { color: new THREE.Color(0, 1, 0), opacity: 0.1 })
            hand.setAttribute('position', new THREE.Vector3(xPos, 1.5, -1))
            hand.setAttribute('custom-controls', { controls })
            hand.setAttribute('super-emitter', '')
            // hand.setAttribute('super-emitter', '')
            sceneEl.appendChild(hand)
        }
    }
})