import { Component } from "./submodules/component.js";
import { Point3 } from "./submodules/point3.js";

let topLeft = new Point3(-1, 1, 0)
let bottomRight = new Point3(1, -1, 0)

const squareVertices = [
    [ // first triangle
        topLeft, // top left
        bottomRight, // bottom right
        new Point3(1, 1, 0), // top right
    ],
    [ // second triangle
        bottomRight, // bottom right
        topLeft, // top left
        new Point3(-1, 1, 0), // bottom left
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
        super(position, thisSquareVertices)
        this.position = position
        this.size = size
    }
}