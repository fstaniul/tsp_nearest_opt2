import { construct_nearest_neighbour_graph } from "../src/dikstra";
import { calculate_distance_matrix } from "../src/distance_matrix";
import { TEST_POINTS } from "./points";

describe('dikstra', () => {
    it('should construct graph by going to nearest neighbour', () => {
        const distanceMatrix = calculate_distance_matrix(TEST_POINTS);
        const graph = construct_nearest_neighbour_graph(distanceMatrix, 0);

        expect(graph).toEqual([
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
        ]);
    });
})