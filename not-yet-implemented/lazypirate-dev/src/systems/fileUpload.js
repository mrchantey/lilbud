
AFRAME.registerSystem('fileUpload', {
    addVideoElt() {
        // console.log(this.sceneEl);
        const el = document.createElement('video')
        el.setAttribute('src', './video.mp4')
        document.appendChild(el)
        // this.sceneEl.appendChild(el)

    },
    uploadFile() {
        return new Promise((resolve, reject) => {
            const el = document.createElement('input')
            el.setAttribute('type', 'file')
            el.setAttribute('accept', 'video/mp4')
            el.onchange = function (e) {
                const src = URL.createObjectURL(this.files[0])
                resolve(src)
                // <!-- URL.revokeObjectURL(src) -->
            }
            document.body.appendChild(el)
            el.click()
            document.body.removeChild(el)
        })
    }
})
