import { Point3 } from './point3.js'
export const Quaternion = (await import('quaternion')).default

export class Camera {
    constructor(position, quat) {
        this.position = position
        this.quat = quat
    }
}