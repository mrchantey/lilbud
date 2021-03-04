

AFRAME.registerComponent('video-360-example', {
    init() {
        console.log(this.el.sceneEl);
        this.el.sceneEl.systems.fileUpload.uploadFile()
            .then(srcData => {
                console.log('video uploaded..');
                const vidEl = document.createElement('a-videosphere')
                vidEl.setAttribute('src', srcData)
                this.el.sceneEl.appendChild(vidEl)
            })
            .catch(console.error)
    }
})
