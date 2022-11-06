import {
    calculate_paths_length,
    construct_empty_graph,
    construct_graph_from_path,
    get_incoming_edge,
    get_outgoing_edge,
    get_path,
    swap_edge,
    validate_path,
} from "../src/graphs";
import { Graph } from "../src/types/Graph";
import { Matrix } from "../src/types/Matrix";

const TEST_GRAPH: Graph = [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
];

describe("graphs", () => {
    it("should construct empty graph", () => {
        const graph = construct_empty_graph(5);

        expect(graph.length).toEqual(5);
        for (let i = 0; i < 5; i++) {
            expect(graph[i].length).toEqual(5);
            expect(graph[i].every(value => value === 0)).toBeTruthy();
        }
    });

    it("should get outgoing edge", () => {
        expect(get_outgoing_edge(TEST_GRAPH, 0)).toEqual(1);
        expect(get_outgoing_edge(TEST_GRAPH, 1)).toEqual(4);
        expect(get_outgoing_edge(TEST_GRAPH, 2)).toEqual(3);
        expect(get_outgoing_edge(TEST_GRAPH, 3)).toEqual(0);
        expect(get_outgoing_edge(TEST_GRAPH, 4)).toEqual(2);
    });

    it("should get incoming edge", () => {
        expect(get_incoming_edge(TEST_GRAPH, 0)).toEqual(3);
        expect(get_incoming_edge(TEST_GRAPH, 1)).toEqual(0);
        expect(get_incoming_edge(TEST_GRAPH, 2)).toEqual(4);
        expect(get_incoming_edge(TEST_GRAPH, 3)).toEqual(2);
        expect(get_incoming_edge(TEST_GRAPH, 4)).toEqual(1);
    });

    it("should swap edge", () => {
        const graph = construct_empty_graph(5);
        graph[0][1] = 1;

        swap_edge(graph, 0, 1);

        expect(graph[0][1]).toEqual(0);
        expect(graph[1][0]).toEqual(1);
    });

    it("should throw when swapping not existing edge", () => {
        const graph = construct_empty_graph(5);
        expect(() => swap_edge(graph, 0, 1)).toThrow();
    });

    it("should return path given the graph", () => {
        const path = get_path(TEST_GRAPH, 0);
        expect(path).toEqual([0, 1, 4, 2, 3, 0]);
    });

    it("should create graph from path", () => {
        const path = [1, 4, 0, 2, 3, 5, 1];
        const graph = construct_graph_from_path(path);

        expect(JSON.stringify(graph)).toStrictEqual(
            JSON.stringify([
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
            ])
        );
    });

    it("should throw when path does not start and end at the same point", () => {
        const path = [1, 4, 0, 2, 3, 5];
        expect(() => validate_path(path)).toThrow();
    });

    it("should throw when path doesn't go through all points", () => {
        const path = [0, 1, 2, 4, 0];
        expect(() => validate_path(path)).toThrow();
    });

    it("should throw when path goes through a point more then once", () => {
        const path = [0, 1, 2, 3, 2, 0];
        expect(() => validate_path(path)).toThrow();
    });

    it("should calculate paths distance", () => {
        const distanceMatrix: Matrix = [
            [0, 2, 4],
            [2, 0, 3],
            [4, 3, 0],
        ];
        const path = [0, 1, 2, 0];
        const distance = calculate_paths_length(path, distanceMatrix);
        expect(distance).toEqual(9);
    });
});
