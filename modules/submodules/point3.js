export class Point3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(x) {
        if (x instanceof Point3) {
            this.x += x.x
            this.y += x.y
            this.z += x.z
            return this
        }
    }
    mult(x) {
        if (x instanceof Point3) {
            this.x *= x.x
            this.y *= x.y
            this.z *= x.z
            return this
        }
        this.x *= x;
        this.y *= x;
        this.z *= x;
        return this
    }

    get array() {
        return [this.x, this.y, this.z]
    }
}