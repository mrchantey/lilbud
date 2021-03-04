
module.exports = _ => {

    const cameraEl = document.querySelector('[camera]')

    const cursor = document.createElement('a-entity')
    cursor.setAttribute('reticle', {})
    cursor.setAttribute('cursor', {})
    console.log(cursor);
    cameraEl.appendChild(cursor)
    return cursor
}