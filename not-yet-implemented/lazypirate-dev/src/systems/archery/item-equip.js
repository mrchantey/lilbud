

AFRAME.registerSystem('item-equip', {

    init() {
        this.itemEquips = []
    },

    registerEquippable(equippable) {
        // equippable.setAttribute('hoverable')
        equippable.addEventListener('hover-start', e => {
            this.registerEquip(equippable, e.detail.hand)
            equippable.emit('on-equip')
            // console.log('hover started');
        }, { once: true })
    },

    registerEquip(item, hand) {
        this.itemEquips.push({
            item,
            hand
        })
    },

    //try to get rid of this
    getEquipFromHand(hand) {
        return this.itemEquips.find(ie => ie.hand === hand)
    },
    getEquipFromItem(item) {
        return this.itemEquips.find(ie => ie.item === item)
    },

    unregisterEquip(equip) {
        if (this.itemEquips.includes(equip)) {
            this.itemEquips.splice(this.itemEquips.indexOf(equip), 1)
        }
    },


    tick() {
        this.itemEquips.forEach(ie => {
            ie.item.object3D.position.copy(ie.hand.object3D.position)
            ie.item.object3D.quaternion.copy(ie.hand.object3D.quaternion)
        })
    }
})

