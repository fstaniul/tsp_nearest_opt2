import { opt2_corssing_paths } from "../src/opt2";

describe('opt2', () => {
    it('should optimise path in the graph', () => {
        const distanceMatrix = [
            [0, 2.24, 4.47, 7.07, 4.00],
            [2.24, 0, 5.00, 6.71, 2.24],
            [4.47, 5.00, 0, 3.16, 4.47],
            [7.07, 6.71, 3.16, 0, 5.10],
            [4.00, 2.24, 4.47, 5.10, 0],
        ];

        const inputPath = [ 0, 1, 4, 2, 3, 0 ];

        const outputPath = [ 0, 1, 4, 3, 2, 0 ];

        expect(opt2_corssing_paths(inputPath, distanceMatrix)).toEqual(outputPath);
    });
})