import { construct_empty_graph, get_incoming_edge, get_outgoing_edge, swap_edge } from "../src/graphs";
import { Graph } from "../src/types/Graph";

const TEST_GRAPH: Graph = [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
];

describe('graphs', () => {
    it('should construct empty graph', () => {
        const graph = construct_empty_graph(5);

        expect(graph.length).toEqual(5);
        for (let i = 0; i < 5; i++) {
            expect(graph[i].length).toEqual(5);
            expect(graph[i].every((value) => value === 0)).toBeTruthy();
        }
    });

    it('should get outgoing edge', () => {
        expect(get_outgoing_edge(TEST_GRAPH, 0)).toEqual(1);
        expect(get_outgoing_edge(TEST_GRAPH, 1)).toEqual(4);
        expect(get_outgoing_edge(TEST_GRAPH, 2)).toEqual(3);
        expect(get_outgoing_edge(TEST_GRAPH, 3)).toEqual(0);
        expect(get_outgoing_edge(TEST_GRAPH, 4)).toEqual(2);
    })

    it('should get incoming edge', () => {
        expect(get_incoming_edge(TEST_GRAPH, 0)).toEqual(3);
        expect(get_incoming_edge(TEST_GRAPH, 1)).toEqual(0);
        expect(get_incoming_edge(TEST_GRAPH, 2)).toEqual(4);
        expect(get_incoming_edge(TEST_GRAPH, 3)).toEqual(2);
        expect(get_incoming_edge(TEST_GRAPH, 4)).toEqual(1);
    });

    it('should swap edge', () => {
        const graph = construct_empty_graph(5);
        graph[0][1] = 1;

        swap_edge(graph, 0, 1);

        expect(graph[0][1]).toEqual(0);
        expect(graph[1][0]).toEqual(1);
    });

    it('should throw when swapping not existing edge', () => {
        const graph = construct_empty_graph(5);
        expect(() => swap_edge(graph, 0, 1)).toThrow();
    })
})