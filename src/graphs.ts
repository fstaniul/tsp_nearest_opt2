import { Graph } from "./types/Graph";
import { Matrix } from "./types/Matrix";

export function construct_empty_graph(size: number): Graph {
    const graph: Graph = [];
    for (let i = 0; i < size; i++) {
        graph.push([]);
        for (let j = 0; j < size; j++) {
            graph[i].push(0);
        }
    }
    return graph;
}

export function get_outgoing_edge(graph: Graph, point: number): number {
    return graph[point].indexOf(1);
}

export function get_incoming_edge(graph: Graph, point: number): number {
    return graph.map((row) => row[point]).indexOf(1);
}

export function swap_edge(graph: Graph, A: number, B: number): void {
    if (graph[A][B] !== 1) throw new Error("There is no edge between A and B");

    graph[A][B] = 0;
    graph[B][A] = 1;
}

export function get_path(graph: Graph, startingPoint: number): number[] {
    const path = [startingPoint];
    let currentPoint = startingPoint;
    while (true) {
        const nextPoint = get_outgoing_edge(graph, currentPoint);
        if (nextPoint === startingPoint) break;
        path.push(nextPoint);
        currentPoint = nextPoint;
    }
    path.push(startingPoint);
    return path;
}

export function validate_path(path: number[]): void {
    if (path[0] !== path[path.length - 1]) throw new Error("Path is not starting and ending at the same point");

    const visited = new Set<number>();
    for (let i = 0; i < path.length - 1; i++) {
        if (visited.has(path[i])) throw new Error("Path goes through one point more then once");
        if (path[i] >= path.length - 1) throw new Error("Path doesn't go through all points (contains point that's out of path's length)");
        visited.add(path[i]);
    }
}

export function construct_graph_from_path(path: number[]): Graph {
    validate_path(path);

    const graph = construct_empty_graph(path.length - 1);
    for (let i = 0; i < path.length; i++) {
        graph[path[i]][path[i + 1]] = 1;
    }

    return graph;
}

export function calculate_paths_length(path: number[], distanceMatrix: Matrix): number {
    validate_path(path);

    let distance = 0;
    for (let i = 0; i < path.length - 1; i++) {
        distance += distanceMatrix[path[i]][path[i + 1]];
    }
    return distance;
}
