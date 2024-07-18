const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const img1 = PNG.sync.read(fs.readFileSync('/Users/mohammadarif/Movies/Screenshot 2023-09-13 10-17-47.png'));
const img2 = PNG.sync.read(fs.readFileSync('/Users/mohammadarif/Movies/Screenshot 2023-09-13 10-18-18.png'));
const {width, height} = img1;
const diff = new PNG({width, height});

const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

console.log(numDiffPixels)

fs.writeFileSync('diff.png', PNG.sync.write(diff));