import { construct_empty_graph } from "./graphs";
import { Graph } from "./types/Graph";
import { Matrix } from "./types/Matrix";

export function construct_nearest_neighbour_graph(distanceMatrix: Matrix, startingPoint: number): Graph {
    const visited = new Set<number>();
    const points = distanceMatrix.length;
    const graph = construct_empty_graph(points);

    let currentPoint = startingPoint;
    while (visited.size < points) {
        if (visited.has(currentPoint)) throw new Error("Visited node twice!");
        visited.add(currentPoint);

        let minimumIndex: number | null = null;
        for (let i = 0; i < points; i++) {
            if (visited.has(i) || i === currentPoint) continue;
            if (minimumIndex === null) {
                minimumIndex = i;
            } else if (distanceMatrix[currentPoint][i] < distanceMatrix[currentPoint][minimumIndex]) {
                minimumIndex = i;
            }
        }

        if (!minimumIndex) {
            graph[currentPoint][startingPoint] = 1;
        } else {
            graph[currentPoint][minimumIndex] = 1;
            currentPoint = minimumIndex;
        }
    }

    return graph;
}
