

AFRAME.registerSystem('archery', {

    init() {
        this.arrows = []
        this.bows = []
    },

    // onArrowDragStart(arrow, hand) {
    //     this.registerArrowGrab(arrow, hand)
    // },
    // onArrowDragEnd(arrow) {
    //     this.unregisterArrowGrab(arrow)
    //     this.unregisterArrowNock(arrow)
    // },

    // onArrowLoosed(arrow) {
    //     if (!this.looseArrows.includes(arrow)) {
    //         this.looseArrows.push(arrow)
    //     }
    // },

    // onBowHoverStart(bow, hand) {
    //     this.arrowGrabs
    //         .filter(ag => ag.hand === hand)
    //         .forEach(ag => this.registerArrowNock(ag.arrow, ag.hand, bow))
    //     // arrowGrabs.forEach(ag => console.log('hover start while arrow grabbed'))
    // },

    // onBowHoverEnd(bow, hand) {
    //     const arrowGrabs = this
    //         .arrowGrabs.filter(ag => ag.hand === hand)
    //         .forEach(ag => this.unregisterArrowNock(ag.arrow, ag.hand, bow))
    //     // arrowGrabs.forEach(ag => console.log('hover end while arrow grabbed'))
    // },

    // registerArrowGrab(arrow, hand) {
    //     if (!this.arrowGrabs.map(ha => ha.arrow).includes(arrow)) {
    //         console.log('registering arrow grab');
    //         this.arrowGrabs.push({
    //             hand,
    //             arrow
    //         })
    //     }
    // },
    // unregisterArrowGrab(arrow) {
    //     const arrowGrab = this.arrowGrabs.find(ag => ag.arrow === arrow)
    //     if (arrowGrab !== undefined) {
    //         console.log('unregistering arrow grab');
    //         this.arrowGrabs.splice(this.arrowGrabs.indexOf(arrowGrab), 1)
    //     }
    // },



    // registerArrowNock(arrow, hand, bow) {
    //     if (!this.arrowNocks.map(an => an.arrow).includes(arrow)) {
    //         const arrowNock = { arrow, hand, bow }
    //         console.log('registering arrow nock')
    //         this.unregisterArrowGrab(arrow, hand)
    //         this.arrowNocks.push(arrowNock)
    //     }
    // },

    // unregisterArrowNock(arrow) {
    //     const an = this.arrowNocks.find(an => an.arrow === arrow)
    //     if (an !== undefined) {
    //         const index = this.arrowNocks.indexOf(an)
    //         console.log('unregistering arrow nock')
    //         this.arrowNocks.splice(index, 1)
    //         this.onArrowLoosed(arrow)
    //     }
    // },

    // // registerBowDraw(hand) {
    // //     console.log('registering arrow draw');
    // //     if (!this.arrowDraws.map(ad => ad.arrowNock.arrowGrab.hand).includes(hand)) {
    // //         const startPos = hand.object3D.getWorldPosition()
    // //     }

    // //     // const ans = this.arrowNocks.filter(an => {
    // //     //     an.arrowGrab.hand === hand
    // //     // });
    // //     // console.log(ans);


    // // },

    // tick() {
    //     this.arrowNocks.forEach(an => {
    //         const posBow = an.bow.object3D.getWorldPosition()
    //         const posHand = an.hand.object3D.getWorldPosition()
    //         const deltaHandBow = posHand.sub(posBow)

    //         const dir = deltaHandBow
    //             .normalize()
    //             .add(an.bow.object3D.position)
    //         an.bow.object3D.lookAt
    //     })
    //     this.looseArrows.forEach(la => {
    //         la.object3D.translateZ(-0.2)

    //     })
    //     // console.log(dir)
    //     // const dirNock2Bow= THREE.Vector3.dir()

    // }
})