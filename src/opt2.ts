import { Graph } from "./types/Graph";
import { Matrix } from "./types/Matrix";
import { construct_graph_from_path, get_path } from "./graphs";

export function opt2_corssing_paths(graph: Graph, distanceMatrix: Matrix, startingPoint: number): Graph {
    let path = get_path(graph, startingPoint);

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

    return construct_graph_from_path(path);
}
