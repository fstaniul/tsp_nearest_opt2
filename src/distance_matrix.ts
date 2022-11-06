import { Matrix } from "./types/Matrix";
import { Point } from "./types/Point";

export function calculate_distance_between_points(A: Point, B: Point): number {
    const [x1, y1] = A;
    const [x2, y2] = B;
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

export function calculate_distance_matrix(points: Point[]): Matrix {
    const distanceMatrix: Matrix = [];

    for (let i = 0; i < points.length; i++) {
        const distanceList: number[] = [];
        
        for (let j = 0; j < points.length; j++) {
            const A = points[i];
            const B = points[j];

            distanceList.push(calculate_distance_between_points(A, B));
        }

        distanceMatrix.push(distanceList);
    }

    return distanceMatrix;
}
