import { createWriteStream } from 'fs'
import { Square } from './modules/square.js'
import { Stage } from './modules/stage.js'
import { Camera, Quaternion } from './modules/submodules/camera.js'
import { Point3 } from './modules/submodules/point3.js'

const zeros = (await import('zeros')).default
const savePixels = (await import('save-pixels')).default
const resolution = [300, 300]

var x = zeros(resolution)

const stage = new Stage()
const sqr = new Square(new Point3(0, 0, 10), 3)
stage.addComponent(sqr)

const cam = new Camera(new Point3(0,0,-30), new Quaternion())
stage.render(cam, x, {
    resolution: resolution,
    viewDepth: 999999
})

const writeableStream = createWriteStream('./out.png')
savePixels(x, "png").pipe(writeableStream)
console.log(`Wrote render to ${writeableStream.path}`)