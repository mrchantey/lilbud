

AFRAME.registerComponent('videosphere-example', {
    init() {

        //creating a seperate video element is the reccomended way of doing this
        const videoEl = document.createElement('video')
        videoEl.setAttribute('src', "https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/")
        videoEl.setAttribute('id', 'future-street')
        videoEl.setAttribute('autoplay', '')
        videoEl.setAttribute('loop', 'true')
        const assetsEl = document.querySelector('a-assets')
        assetsEl.appendChild(videoEl)

        const videoSphereEl = document.createElement('a-videosphere')
        //this particular video needs to rotate 90 degrees to face forward
        videoSphereEl.object3D.rotateY(Math.PI)
        videoSphereEl.setAttribute('src', '#future-street')

        this.el.appendChild(videoSphereEl)

    }
})