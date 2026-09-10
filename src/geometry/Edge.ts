import { EdgeVertexRef } from "./EdgeVertexRef.js";

export class Edge {
    private _vertices!: EdgeVertexRef[];

    public constructor(vertices: EdgeVertexRef[]) {
        this.setVertices(vertices);
    }

    public getVertices(): readonly EdgeVertexRef[] {
        return this._vertices;
    }

    public setVertices(vertices: EdgeVertexRef[]): void {
        if (vertices.length !== 2) {
            throw new Error("An edge must have exactly 2 vertices.");
        }

        this._vertices = vertices;
    }
}