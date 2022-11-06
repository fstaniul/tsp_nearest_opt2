import { Matrix } from "./types/Matrix";

export function opt2_corssing_paths(path: number[], distanceMatrix: Matrix): number[] {
    path = path.slice();

    for (let i = 0; i < path.length - 3; i++) {
        const Ax = path[i];
        const Ay = path[i + 1];

        for (let j = i + 2; j < path.length - 1; j++) {
            const Bx = path[j];
            const By = path[j + 1];

            const originalDistance = distanceMatrix[Ax][Ay] + distanceMatrix[Bx][By];
            const swappedDistance = distanceMatrix[Ax][Bx] + distanceMatrix[Ay][By];

            if (swappedDistance < originalDistance) {
                let temp = path[i + 1];
                path[i + 1] = path[j];
                path[j] = temp;

                path = path.slice(0, i + 2).concat(path.slice(i + 2, j).reverse(), path.slice(j));
            }
        }
    }
    
    return path;
}
