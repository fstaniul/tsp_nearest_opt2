import { construct_nearest_neighbour_graph } from "./dikstra";
import { get_path } from "./graphs";
import { opt2_corssing_paths } from "./opt2";
import { Matrix } from "./types/Matrix";

export function calculate_shortest_hamilton_cycle(distanceMatrix: Matrix, startingPoint: number): number[] {
    const graph = construct_nearest_neighbour_graph(distanceMatrix, startingPoint);
    const path = get_path(graph, startingPoint);
    return opt2_corssing_paths(path, distanceMatrix);
}