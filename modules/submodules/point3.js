export class Point3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    mult(x) {
        this.x *= x;
        this.y *= x;
        this.z *= x;
        return this
    }

    get array() {
        return [this.x, this.y, this.z]
    }
}