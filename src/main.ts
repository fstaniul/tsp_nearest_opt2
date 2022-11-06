import { calculate_distance_matrix } from "./distance_matrix";
import { calculate_paths_length } from "./graphs";
import { calculate_shortest_hamilton_cycle } from "./hamilton_cycle";
import { read_points_from_file } from "./io";
import { get_point_index_from_label, print_error, print_length, print_path } from "./ui";
import { program } from "commander";

program
    .argument("<startingPoint>", "Starting point")
    .option("-p, --precision <precision>", "Precision", "2")
    .option("-f, --file <file>", "File", "points.txt");

program.parse(process.argv);

main();

// Main Program:
async function main() {
    try {
        const options = program.opts();
        const startingPoint = get_point_index_from_label(program.args[0]);
        const precision = parseInt(options.precision);
        const points = await read_points_from_file(options.file);
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
