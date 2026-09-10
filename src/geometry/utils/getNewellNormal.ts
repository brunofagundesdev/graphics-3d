import { Vector3 } from "@brunofagundesdev/graphics-math";

export function getNewellNormal(vertices: Vector3[]): Vector3 {
    if (vertices.length < 3) {
        throw new Error("At least 3 vertices are required to calculate Newell's normal.");
    }

    const normal = Vector3.zero();

    for (let i = 0; i < vertices.length; i++) {
        const current = vertices[i]!;
        const next = vertices[(i + 1) % vertices.length]!;

        normal.x += (current.y - next.y) * (current.z + next.z);
        normal.y += (current.z - next.z) * (current.x + next.x);
        normal.z += (current.x - next.x) * (current.y + next.y);
    }

    if (normal.lengthSquared() === 0) {
        throw new Error("Cannot calculate normal from degenerate vertices.");
    }

    return normal.normalize();
}