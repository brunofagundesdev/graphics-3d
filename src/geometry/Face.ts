import { FaceVertexRef } from "./FaceVertexRef.js";

export class Face {
    private _vertices!: FaceVertexRef[];

    public constructor(vertices: FaceVertexRef[]) {
        this.setVertices(vertices);
    }

    public getVertices(): readonly FaceVertexRef[] {
        return this._vertices;
    }

    public setVertices(vertices: FaceVertexRef[]): void {
        if (vertices.length < 3) {
            throw new Error("A face must have at least 3 vertices.");
        }

        this._vertices = vertices;
    }
}