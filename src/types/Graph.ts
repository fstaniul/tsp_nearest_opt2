/**
 * Graph is represented as a matrix of connection between nodes.
 * If Graph[A][B] is 1, it means that there is a connection between A and B.
 */
export type Graph = (0 | 1)[][];