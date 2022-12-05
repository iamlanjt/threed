import { createWriteStream } from 'fs'
import { Square } from './modules/square.js'
import { Stage } from './modules/stage.js'
import { Camera, Quaternion } from './modules/submodules/camera.js'
import { Component } from './modules/submodules/component.js'
import { Point3 } from './modules/submodules/point3.js'

const Ray = (await import('ray-3d')).default
const zeros = (await import('zeros')).default
const savePixels = (await import('save-pixels')).default
const resolution = [300, 300]

var x = zeros(resolution)

const stage = new Stage()
const sqr = new Square(new Point3(5, 5, 0), 1)
const sqr2 = new Square(new Point3(10, 5, -5), 2)
const thisCamera = new Camera(new Quaternion(0,15,0,15), new Point3(1,0,0))

stage.addComponent(sqr)
stage.addComponent(sqr2)
stage.render(thisCamera, x, {
    resolution: resolution,
    viewDepth: 1
})

const writeableStream = createWriteStream('./out.png')
savePixels(x, "png").pipe(writeableStream)
console.log(`Wrote render to ${writeableStream.path}`)