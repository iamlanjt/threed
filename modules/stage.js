/**
 * Stage:
 * 
 * The main class for staging objects and rendering them
 * 
 * Methods:
 * addComponent(component: Component);
 * render(camera: Camera)
 */

import { Point3 } from './submodules/point3.js'
const Ray = (await import('ray-3d')).default

function calculateDistance(p1, p2) {
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    var c = p2.z - p1.z;

    return Math.sqrt(a * a + b * b + c * c);
}
function checkAllIntersections(origin, components, r) {
    let finished = null
    components.forEach((c)=>{
        c.vertexes.forEach(async(triangle)=>{
            let tri1 = triangle[0]
            let tri2 = triangle[1]
            let tri3 = triangle[2]
            // console.log(tri3)
            tri1 = [c.position.x+tri1.x, c.position.y+tri1.y, c.position.z+tri1.z]
            tri2 = [c.position.x+tri2.x, c.position.y+tri2.y, c.position.z+tri2.z]
            tri3 = [c.position.x+tri3.x, c.position.y+tri3.y, c.position.z+tri3.z]
            let tri = [tri1, tri2, tri3]
            let intersection = r.intersectsTriangle(tri)
            // console.log(tri, r, intersection)
            if (intersection !== null && !isNaN(intersection[0])) {
                let p0 = intersection[0]
                let p1 = intersection[1]
                let p2 = intersection[2]
                let dist = calculateDistance(origin, new Point3(p0, p1, p2))
                if (finished === null || dist < finished[0]) {
                    finished = [dist]
                }
            }
        })
    })
    return finished
}

export class Stage {
    constructor() {
        this.components = []
    }

    addComponent(component) {
        this.components.push(component)
    }

    render(camera, zeros_stream, options) {
        let resolution = options.resolution
        if (!resolution) throw new Error('Resolution must be passed')
        let viewDepth = options.viewDepth || 1
        let resX = resolution[0]
        let resY = resolution[1]
        for (let IY = 0; IY < resY; IY++) {
            for (let IX = 0; IX < resX; IX++) {
                let originX = (IX-resolution[0])/resolution[0] // IX
                let originY = (IY-resolution[1])/resolution[1] // IY
                let thisDir = new Point3(originX, originY, viewDepth)
                const thisRay = new Ray(camera.position.array, thisDir.array)
                let thisRayHit = checkAllIntersections(camera.position, this.components, thisRay)
                if (thisRayHit) {
                    zeros_stream.set(IX, IY, 255)
                }
            }
        }
        console.log(`Rendering ${this.components.length} components with camera of QUAT ${camera.quat}`)
    }
}