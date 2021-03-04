

AFRAME.registerComponent('hello-world', {
    init() {
        this.el.sceneEl.setAttribute('message-logger', 'ahoyhoy world')
        this.el.sceneEl.setAttribute('ground', {})
        this.el.sceneEl.setAttribute('mystical-anomoly', {})
        this.el.sceneEl.renderer.setClearColor('#CE5E1F')
    }
})