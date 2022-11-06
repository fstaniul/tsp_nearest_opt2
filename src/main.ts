import { calculate_distance_matrix } from "./distance_matrix";
import { calculate_paths_length } from "./graphs";
import { calculate_shortest_hamilton_cycle } from "./hamilton_cycle";
import { read_points_from_file } from "./io";
import { get_point_index_from_label, print_error, print_length, print_path } from "./ui";

main();

// Main Program:
async function main() {
    try {
        const startingPoint = get_point_index_from_label(process.argv[2]);
        const precision = parseInt(process.argv[3]);
        const points = await read_points_from_file(process.argv[4] || "points.txt");
        const distanceMatrix = calculate_distance_matrix(points);
        const path = calculate_shortest_hamilton_cycle(distanceMatrix, startingPoint);
        const length = calculate_paths_length(path, distanceMatrix);
        print_path(path, points);
        print_length(length, precision);
    } catch (e: any) {
        print_error(e);
        process.exit(1);
    }
}
