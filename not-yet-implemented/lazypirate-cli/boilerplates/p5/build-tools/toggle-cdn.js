
module.exports = {
    toggleOn: _ => toggle(true),
    toggleOff: _ => toggle(false)
}


function toggle(cdn) {
    const fs = require('fs');

    console.log(`toggling cdn ${cdn ? 'on' : 'off'}`);

    const htmlPath = './dist/index.html'
    const html = fs.readFileSync(htmlPath).toString()

    const htmlDisabled = `<!-- will be enabled on build <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"></script> -->`
    const htmlEnabled = `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"></script> <!--  -->`
    const newHtml = cdn ? html.replace(htmlDisabled, htmlEnabled) : html.replace(htmlEnabled, htmlDisabled)

    fs.writeFileSync(htmlPath, newHtml)

    const jsPath = './src/index.js'
    const js = fs.readFileSync(jsPath).toString()

    const jsDisabled = `//const p5 = require('p5');`
    const jsEnabled = `/*will be disabled on build*/const p5 = require('p5');`
    const newJs = cdn ? js.replace(jsEnabled, jsDisabled) : js.replace(jsDisabled, jsEnabled)

    fs.writeFileSync(jsPath, newJs)
}
