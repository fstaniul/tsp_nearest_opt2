import { Graph } from "./types/Graph";

export function construct_empty_graph(size: number): Graph {
    return new Array(size).fill(0).map(() => new Array(size).fill(0));
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
