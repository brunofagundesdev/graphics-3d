import { EulerRotation, Vector3 } from "@brunofagundesdev/graphics-math";
import { Face } from "./Face.js";
import { Edge } from "./Edge.js";
import { BoundingBox } from "./BoundingBox.js";
import { getNewellNormal } from "./utils/getNewellNormal.js";

interface MeshOptions {
    vertices: Vector3[];
    faces?: Face[];
    edges?: Edge[];
}

export class Mesh {
    public vertices: Vector3[];
    public faces: Face[];
    public edges: Edge[];

    public constructor(options: MeshOptions) {
        this.vertices = options.vertices;
        this.faces = options.faces ?? [];
        this.edges = options.edges ?? [];

        if (this.vertices.length === 0) {
            throw new Error("The mesh must contain at least one vertex.");
        }
    }

    public translate(displacement: Vector3): this {
        for (const vertex of this.vertices) {
            vertex.add(displacement);
        }

        return this;
    }

    public rotate(rotation: EulerRotation, origin: Vector3 = this.getBoundsCenter()): this {
        for (const vertex of this.vertices) {
            vertex.rotate(rotation, origin);
        }

        return this;
    }

    // getters

    public getBoundsCenter(): Vector3 {
        return BoundingBox.fromMesh(this).getCenter();
    }

    public getCentroid(): Vector3 {
        return Vector3.average(this.vertices);
    }

    public getFaceVertices(face: Face): Vector3[] {
        return face.getVertices().map(
            vertex => this.vertices[vertex.index]!
        );
    }

    public getFaceNormal(face: Face): Vector3 {
        return getNewellNormal(this.getFaceVertices(face));
    }
}