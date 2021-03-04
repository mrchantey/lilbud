

AFRAME.registerSystem('arrow-loose', {

    init() {
        this.arrowLooses = []
    },
    registerArrowLoose(arrowDraw) {
        arrowDraw.arrow.setAttribute('simple-physics', {
            startForce: new THREE.Vector3(0, 0, -5)
        })
        const phy = arrowDraw.arrow.getAttribute('simple-physics')
        // console.log(phy);  // console.log('loose!', phy);

    }




})