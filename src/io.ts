import fs = require('fs');
import path = require('path');
import { promisify } from 'util';
import { Point } from './types/Point';

const read_file = promisify(fs.readFile);

export async function read_points_from_file(file: string): Promise<Point[]> {
    const fileContent = await read_file(path.resolve(process.cwd(), file), 'utf8');
    const lines = fileContent.split('\n');
    const numberOfPoints = parseInt(lines[0].trim(), 10);

    if (isNaN(numberOfPoints)) {
        throw new Error('Invalid file format!');
    }

    const points: Point[] = [];
    
    for (let i = 1; i <= numberOfPoints; i++) {
        if (i >= lines.length) {
            throw new Error('Invalid file format!');
        }

        const [x, y] = lines[i].trim().split(' ').map((value) => parseInt(value, 10));

        if (typeof x !== 'number' || typeof y !== 'number' || isNaN(x) || isNaN(y)) {
            throw new Error('Invalid file format!');
        }

        points.push([x, y]);
    }

    return points;
}