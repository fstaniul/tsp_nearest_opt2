import chalk from "chalk";
import { Point } from "./types/Point";

export function get_point_label(pointIndex: number): string {
    const suffixNumber = Math.floor(pointIndex / 26);
    const letter = String.fromCharCode("A".charCodeAt(0) + (pointIndex % 26));
    return suffixNumber === 0 ? letter : `${letter}${suffixNumber}`;
}

export function point_to_string(points: Point[], index: number): string {
    return `${get_point_label(index)} (${points[index][0]}, ${points[index][1]})`;
}

export function get_point_index_from_label(label: string): number {
    const letter = label[0];
    const suffix = label.slice(1);
    return (suffix ? parseInt(suffix) : 0) * 26 + (letter.charCodeAt(0) - "A".charCodeAt(0));
}

export function path_to_string(path: number[], points: Point[]): string {
    return path.map(pointIndex => point_to_string(points, pointIndex)).join(" -> ");
}

export function print_path(path: number[], points: Point[]): void {
    console.log("Path:", path_to_string(path, points));
}

export function print_length(length: number, precision: number = 2): void {
    if (typeof precision !== "number" || isNaN(precision) || precision < 0) precision = 2;
    console.log("Length:", length.toPrecision(precision));
}

export function print_error(error: any): void {
    console.error(chalk.bgRed.white('ERROR:'), error);
}
