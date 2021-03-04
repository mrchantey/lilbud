

AFRAME.registerComponent('simple-physics', {
    schema: {
        gravity: {
            type: 'number',
            default: 0.01
        }
        ,
        startForce: {
            type: 'vec3',
        }
    },
    init() {
        this.m_data = {}
        this.m_data.acc = new THREE.Vector3(this.data.startForce.x, this.data.startForce.y, this.data.startForce.z)
        this.m_data.vel = new THREE.Vector3()
        console.log(this.data.vel);
    },

    addForce(force) {
        console.log(this.data.vel);
        this.m_data.acc.add(force)
    }

    , tick(time, dTime) {
        // this.data.
        // console.log(this.m_data);
        this.m_data.vel.add(this.m_data.acc)
        this.m_data.acc = new THREE.Vector3()
        this.m_data.vel.y -= this.data.gravity
        const dVel = this.m_data.vel.clone().multiplyScalar(dTime * 0.001)
        this.el.object3D.translateX(dVel.x)
        this.el.object3D.translateY(dVel.y)
        this.el.object3D.translateZ(dVel.z)

    }

})