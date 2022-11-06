import { calculate_distance_matrix } from "../src/distance_matrix";
import { calculate_shortest_hamilton_cycle } from "../src/hamilton_cycle";
import { TEST_POINTS } from "./points";

describe('hamilton_cycle', () => {
    it('should return the shortest hamilton cycle', () => {
        const startingPoint = 0;
        const distanceMatrix = calculate_distance_matrix(TEST_POINTS);
        const shortestHamiltonCycle = calculate_shortest_hamilton_cycle(distanceMatrix, startingPoint);
        expect(shortestHamiltonCycle).toEqual([0, 1, 4, 3, 2, 0]);
    });
});
