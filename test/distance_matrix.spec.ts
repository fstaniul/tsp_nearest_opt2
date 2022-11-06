import { calculate_distance_matrix } from "../src/distance_matrix";
import { TEST_POINTS } from "./points";

describe('distance_matrix', () => {
    it('should return the distance matrix between points', () => {
        const distanceMatrix = calculate_distance_matrix(TEST_POINTS).map(row => row.map(cell => parseFloat(cell.toFixed(2))));

        expect(distanceMatrix).toEqual([
            [0, 2.24, 4.47, 7.07, 4.00],
            [2.24, 0, 5.00, 6.71, 2.24],
            [4.47, 5.00, 0, 3.16, 4.47],
            [7.07, 6.71, 3.16, 0, 5.10],
            [4.00, 2.24, 4.47, 5.10, 0],
        ]);
    });
});