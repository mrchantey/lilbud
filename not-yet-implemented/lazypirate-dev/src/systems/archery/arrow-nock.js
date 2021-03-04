

AFRAME.registerSystem('arrow-nock', {
    init() {
        this.arrowNocks = []
        this.systems = this.sceneEl.systems
    },

    registerNockableBow(bow) {
        bow.addEventListener('hover-start', hoverStartListener)
        const self = this

        function hoverStartListener(e) {
            const hand = e.detail.hand
            const arrowEquip = self.systems['item-equip'].getEquipFromHand(hand)
            const bowEquip = self.systems['item-equip'].getEquipFromItem(bow)
            if (arrowEquip && bowEquip && arrowEquip.item.is('arrow')) {
                self.registerNock(bowEquip, arrowEquip)
                bow.removeEventListener('hover-start', hoverStartListener)
            }
        }
    },

    registerNock(bowEquip, arrowEquip) {
        this.systems['item-equip'].unregisterEquip(arrowEquip)
        this.systems['item-equip'].unregisterEquip(bowEquip)
        const arrowNock = {
            arrow: arrowEquip.item,
            arrowHand: arrowEquip.hand,
            bow: bowEquip.item,
            bowHand: bowEquip.hand
        }
        this.arrowNocks.push(arrowNock)
        arrowEquip.hand.addEventListener('mousedown', e => {
            // console.log('draw!');
            this.unregisterNock(arrowNock)
            this.systems['arrow-draw'].registerArrowDraw(arrowNock)
        }, {
                once: true
            })
        // this.nockEls.push([bow, hand, arrowEquip.item, bowEquip.item])

    },

    unregisterNock(nock) {
        const index = this.arrowNocks.indexOf(nock)
        if (index !== -1)
            this.arrowNocks.splice(index, 1)
    },

    // tryGetNockFromHand(hand) {
    //     return this.arrowNocks.find(an => an.hand === hand)
    // },
    tick() {

        this.arrowNocks.forEach(an => {
            const deltaPos = an.arrowHand.object3D.position.clone().sub(an.bowHand.object3D.position)
            // const dist = deltaPos.length()
            const dir = deltaPos.normalize()
            const lookOffset = an.bowHand.object3D.position.clone().add(dir)
            an.bow.object3D.lookAt(lookOffset)
            an.bow.object3D.position.copy(an.bowHand.object3D.position)
            // console.log(lookOffset);

            an.arrow.object3D.position.copy(an.bowHand.object3D.position)
            an.arrow.object3D.quaternion.copy(an.bow.object3D.quaternion)
            // an.arrow.object3D.translateZ()

        })


    }
})