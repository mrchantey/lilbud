

AFRAME.registerSystem('arrow-draw', {

    init() {
        this.arrowDraws = []
    },

    registerArrowDraw(arrowNock) {

        const arrowDraw = Object.assign({
            // arrowHandStart: arrowNock.arrowHand.object3D.position.clone()
        }, arrowNock)

        this.arrowDraws.push(arrowDraw)
        arrowDraw.arrowHand.addEventListener('mouseup', e => {
            this.arrowDraws.splice(this.arrowDraws.indexOf(arrowDraw), 1)
            this.sceneEl.systems['arrow-loose'].registerArrowLoose(arrowDraw)
        })
    },

    tick() {
        this.arrowDraws.forEach(ad => {
            const deltaPos = ad.arrowHand.object3D.position.clone().sub(ad.bowHand.object3D.position)
            // const dist = deltaPos.length()
            const dir = deltaPos.normalize()
            const lookOffset = ad.bowHand.object3D.position.clone().add(dir)
            ad.bow.object3D.lookAt(lookOffset)
            ad.bow.object3D.position.copy(ad.bowHand.object3D.position)
            // console.log(lookOffset);

            ad.arrow.object3D.position.copy(ad.arrowHand.object3D.position)
            ad.arrow.object3D.quaternion.copy(ad.bow.object3D.quaternion)
        })


    }

})