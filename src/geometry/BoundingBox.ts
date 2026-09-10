import { Vector3 } from "@brunofagundesdev/graphics-math";
import { Mesh } from "./Mesh.js";

export class BoundingBox {
    public constructor(
        public min: Vector3,
        public max: Vector3
    ) { }

    public getCenter(): Vector3 {
        return Vector3.add(this.min, this.max).divideScalar(2);
    }

    public getSize(): number {
        return this.min.dot(this.max);
    }

    public static fromMesh(mesh: Mesh): BoundingBox {
        const vertices: Vector3[] = mesh.vertices;

        const xMap: number[] = vertices.map(vertice => vertice.x);
        const yMap: number[] = vertices.map(vertice => vertice.y);
        const zMap: number[] = vertices.map(vertice => vertice.z);

        const min: Vector3 = new Vector3(
            Math.min(...xMap),
            Math.min(...yMap),
            Math.min(...zMap)
        );
        const max: Vector3 = new Vector3(
            Math.max(...xMap),
            Math.max(...yMap),
            Math.max(...zMap)
        );

        return new BoundingBox(min, max);
    }
}