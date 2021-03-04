/*will be disabled on build*/const p5 = require('p5');
window.addEventListener('load', start)

function start() {
    const sketch = new p5(createSketch)
}

function createSketch(p) {

    p.setup = _ => {
        p.createCanvas(window.innerWidth, window.innerHeight)
        p.stroke(127, 127, 76)
        p.fill(255, 255, 153)
    }

    p.draw = _ => {
        p.background(102, 255, 178)
        p.translate(p.width / 2, p.height / 2)
        const x = p.sin(p.frameCount * 0.03) * 100
        p.ellipse(x, 0, 20, 20)
    }
}