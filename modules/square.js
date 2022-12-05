import { Component } from "./submodules/component.js";
import { Point3 } from "./submodules/point3.js";

let topLeft = new Point3(-1, 1, 0)
let bottomRight = new Point3(1, -1, 0)

export class Square extends Component {
    constructor(position, size) {
        const squareVertices = [
            [
                new Point3(-1, 1, 0),
                new Point3(1, 1, 0),
                new Point3(-1, -1, 0)
            ],
            [
                new Point3(-1, -1, 0),
                new Point3(1, 1, 0),
                new Point3(1, -1, 0)
            ]
        ]
        const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);
        
        let thisSquareVertices = clone(squareVertices)
        thisSquareVertices.forEach((vertGroup)=>{
            vertGroup.forEach((point3)=>{
                point3.mult(size)
            })
        })
        super(position, thisSquareVertices)
        this.position = position
    }
}