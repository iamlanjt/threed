import { Point3 } from './point3.js'
export const Quaternion = (await import('quaternion')).default

export class Camera {
    constructor(quat, rot) {
        this.position = new Point3(quat.x, quat.y, quat.z)
        this.quat = quat
        this.rot = rot
    }
}