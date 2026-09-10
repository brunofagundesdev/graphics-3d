import { Vector3 } from "@brunofagundesdev/graphics-math";
import { Mesh } from "../geometry/Mesh.js";
import { Face } from "../geometry/Face.js";
import { FaceVertexRef } from "../geometry/FaceVertexRef.js";

export interface CubeOptions {
    size?: number;
    width?: number;
    height?: number;
    depth?: number;
}

export class Cube extends Mesh {
    public constructor(options: CubeOptions = {}) {

        const size = options.size ?? 1;

        const width = options.width ?? size;
        const height = options.height ?? size;
        const depth = options.depth ?? size;

        const vertices: Vector3[] = [
            new Vector3(- width / 2, + height / 2, - depth / 2),
            new Vector3(+ width / 2, + height / 2, - depth / 2),
            new Vector3(+ width / 2, - height / 2, - depth / 2),
            new Vector3(- width / 2, - height / 2, - depth / 2),

            new Vector3(- width / 2, + height / 2, + depth / 2),
            new Vector3(+ width / 2, + height / 2, + depth / 2),
            new Vector3(+ width / 2, - height / 2, + depth / 2),
            new Vector3(- width / 2, - height / 2, + depth / 2)
        ];
        const faces: Face[] = [
            new Face([new FaceVertexRef(0, 0, 0), new FaceVertexRef(1, 1, 0), new FaceVertexRef(2, 1, 1), new FaceVertexRef(3, 0, 1)]),
            new Face([new FaceVertexRef(1, 0, 0), new FaceVertexRef(5, 1, 0), new FaceVertexRef(6, 1, 1), new FaceVertexRef(2, 0, 1)]),
            new Face([new FaceVertexRef(5, 0, 0), new FaceVertexRef(4, 1, 0), new FaceVertexRef(7, 1, 1), new FaceVertexRef(6, 0, 1)]),
            new Face([new FaceVertexRef(4, 0, 0), new FaceVertexRef(0, 1, 0), new FaceVertexRef(3, 1, 1), new FaceVertexRef(7, 0, 1)]),
            new Face([new FaceVertexRef(5, 0, 0), new FaceVertexRef(1, 1, 0), new FaceVertexRef(0, 1, 1), new FaceVertexRef(4, 0, 1)]),
            new Face([new FaceVertexRef(3, 0, 0), new FaceVertexRef(2, 1, 0), new FaceVertexRef(6, 1, 1), new FaceVertexRef(7, 0, 1)]),
        ];

        super({
            vertices,
            faces
        });
    }
}