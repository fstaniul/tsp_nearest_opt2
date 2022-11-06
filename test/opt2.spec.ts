import { opt2_corssing_paths } from "../src/opt2";
import { Graph } from "../src/types/Graph";

describe('opt2', () => {
    it('should optimise path in the graph', () => {
        const distanceMatrix = [
            [0, 2.24, 4.47, 7.07, 4.00],
            [2.24, 0, 5.00, 6.71, 2.24],
            [4.47, 5.00, 0, 3.16, 4.47],
            [7.07, 6.71, 3.16, 0, 5.10],
            [4.00, 2.24, 4.47, 5.10, 0],
        ];

        const inputGraph: Graph = [
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
        ];

        const optimisedGraph: Graph = [
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
        ];

        expect(JSON.stringify(opt2_corssing_paths(inputGraph, distanceMatrix, 0))).toEqual(JSON.stringify(optimisedGraph));
    });
})