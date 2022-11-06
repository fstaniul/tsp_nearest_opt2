import fs = require("fs");
import { read_points_from_file } from "../src/io";

jest.mock("fs");

describe("io", () => {
    describe("read_points_from_file", () => {
        const mockFileContents = (content: string) => {
            (fs.readFile as unknown as jest.Mock).mockImplementation((_path, _encoding, callback) => {
                callback(null, content);
            });
        };

        afterEach(() => {
            jest.resetAllMocks();
        });

        it("should parse points from file", async () => {
            const file = ["5", "1 2", "3 1", "3 6", "6 7", "5 2"].join("\n");
            mockFileContents(file);

            const points = await read_points_from_file("test.txt");

            expect(points).toEqual([
                [1, 2],
                [3, 1],
                [3, 6],
                [6, 7],
                [5, 2],
            ]);
        });

        it("should handle almost good file", async () => {
            const file = ["5 123 jubberish", "1 2 asdasd", "3 1 hasta la vista", "3 6", "6 7 numero uno", "5 2"].join("\n");
            mockFileContents(file);

            const points = await read_points_from_file("test.txt");

            expect(points).toEqual([
                [1, 2],
                [3, 1],
                [3, 6],
                [6, 7],
                [5, 2],
            ]);
        });

        it("should throw error when does not have enough points", async () => {
            expect.assertions(1);
            mockFileContents("3\n1 2");

            try {
                await read_points_from_file("test.txt");
            } catch (e: any) {
                expect(e.message).toEqual("Invalid file format!");
            }
        });

        it("should throw error when point data is missing coordinate", async () => {
            expect.assertions(1);
            mockFileContents("3\n1 2\n3 3\n4");

            try {
                await read_points_from_file("test.txt");
            } catch (e: any) {
                expect(e.message).toEqual("Invalid file format!");
            }
        });

        it("should throw error when point data is jibberish", async () => {
            expect.assertions(1);
            mockFileContents("3\n1 2\n12 3\nasdasda asdasd");

            try {
                await read_points_from_file("test.txt");
            } catch (e: any) {
                expect(e.message).toEqual("Invalid file format!");
            }
        });

        it("should throw when file is jibberish", async () => {
            expect.assertions(1);
            mockFileContents("asdasda");

            try {
                await read_points_from_file("test.txt");
            } catch (e: any) {
                expect(e.message).toEqual("Invalid file format!");
            }
        });
    });
});
