import { countAllTrees } from './task.js';

const input = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`;

describe('Day three', () => {
  it('counts all trees encountered on a map', () => {
    expect(countAllTrees(input)).toEqual(7);
  });
});
