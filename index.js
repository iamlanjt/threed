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

const thisComponent = new Component(new Point3(-50,-50,0), [
    [
        new Point3(16,16,0),
        new Point3(-126, 26, 0),
        new Point3(-26,-126,0),
    ]
])
console.log(thisComponent.vertexes)
const thisCamera = new Camera(new Quaternion(0,0,0,10), new Point3(0,0,1))
/**
let originX = 0.5
let originY = 0.5
let thisDir = new Point3(originX, originY, 1)
console.log('28',thisCamera.position.array, thisDir.array)
const thisRay = new Ray(thisCamera.position.array, thisDir.array)
const triangle = thisComponent.vertexes[0]
let tri1 = triangle[0]
let tri2 = triangle[1]
let tri3 = triangle[2]
let c = {
    position: new Point3(0,0,0)
}
tri1 = [c.position.x+tri1.x, c.position.y+tri1.y, c.position.z+tri1.z]
tri2 = [c.position.x+tri2.x, c.position.y+tri2.y, c.position.z+tri2.z]
tri3 = [c.position.x+tri3.x, c.position.y+tri3.y, c.position.z+tri3.z]
let tri = [tri1, tri2, tri3]
let intersection = thisRay.intersectsTriangle(tri)
console.log(intersection)
*/
stage.addComponent(sqr)
console.log(1)
stage.render(thisCamera, x, {
    resolution: resolution,
    viewDepth: 1
})

const writeableStream = createWriteStream('./out.png')
savePixels(x, "png").pipe(writeableStream)
console.log(`Wrote render to ${writeableStream.path}`)