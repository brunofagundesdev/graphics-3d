import { Vector3 } from "@brunofagundesdev/graphics-math";

export function getNormal(vectorA: Vector3, vectorB: Vector3, vectorC: Vector3): Vector3 {
    const vectorAB = Vector3.subtract(vectorA, vectorB);
    const vectorAC = Vector3.subtract(vectorA, vectorC);

    const normal = vectorAB.cross(vectorAC).normalize();

    return normal;
}