import { calculate_shortest_hamilton_cycle } from "../src/hamilton_cycle";
import { TEST_POINTS } from "./points";

describe('Main', () => {
    it('should return the shortest hamilton cycle', () => {
        const startingPoint = 0;

        const shortestHamiltonCycle = calculate_shortest_hamilton_cycle(TEST_POINTS, startingPoint);
        expect(shortestHamiltonCycle).toEqual([0, 1, 4, 3, 2, 0]);
    });
});
