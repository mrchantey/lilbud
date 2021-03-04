

AFRAME.registerComponent('custom-controls', {
    schema: {
        speed: {
            type: 'number',
            default: 0.06
        },
        controls:
        {
            type: 'array',
            default: ['w', 'q', 'a', 's', 'd', 'e', '2', '1', '3']
        },
        deltaPos: {
            type: 'vec3',
        },
        deltaRotY: {
            type: 'number'
        },
        deltaRotZ: {
            type: 'number'
        },
    },
    init() {
        const fwd = this.data.controls[0]
            , panLeft = this.data.controls[1]
            , left = this.data.controls[2]
            , back = this.data.controls[3]
            , right = this.data.controls[4]
            , panRight = this.data.controls[5]
            , mouse = this.data.controls[6]
            , rollLeft = this.data.controls[7]
            , rollRight = this.data.controls[8]
            , dp = this.data.speed
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case fwd:
                    this.data.deltaPos.z = -dp
                    break
                case back:
                    this.data.deltaPos.z = dp
                    break
                case left:
                    this.data.deltaPos.x = -dp
                    break
                case right:
                    this.data.deltaPos.x = dp
                    break
                case panLeft:
                    this.data.deltaRotY = dp
                    break
                case panRight:
                    this.data.deltaRotY = -dp
                    break
                case rollLeft:
                    this.data.deltaRotZ = dp
                    break
                case rollRight:
                    this.data.deltaRotZ = -dp
                    break
                case mouse:
                    this.el.emit('mousedown')
                    break
            }
        })
        window.addEventListener('keyup', e => {
            switch (e.key) {
                case fwd:
                case back:
                    this.data.deltaPos.z = 0
                    break
                case left:
                case right:
                    this.data.deltaPos.x = 0
                    break
                case panLeft:
                case panRight:
                    this.data.deltaRotY = 0
                    break
                case rollLeft:
                case rollRight:
                    this.data.deltaRotZ = 0
                    break
                case mouse:
                    this.el.emit('mouseup')
                    break
            }
        })
    },
    tick() {
        // console.log(this.data.deltaPos.x);
        this.el.object3D.translateX(this.data.deltaPos.x)
        this.el.object3D.translateZ(this.data.deltaPos.z)
        this.el.object3D.rotateY(this.data.deltaRotY)
        this.el.object3D.rotateZ(this.data.deltaRotZ)
    }


})