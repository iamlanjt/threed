import { Component } from "./submodules/component.js";
import { Point3 } from "./submodules/point3.js";

let topLeft = new Point3(-1, 1, 0)
let bottomRight = new Point3(1, -1, 0)

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

export class Square extends Component {
    constructor(position, size) {
        let thisSquareVertices = squareVertices
        thisSquareVertices.forEach((vertGroup)=>{
            vertGroup.forEach((point3)=>{
                point3.mult(size)
            })
        })
        console.log(thisSquareVertices)
        super(position, thisSquareVertices)
        this.position = position
        this.size = size
    }
}