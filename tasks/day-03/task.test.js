import { countTreesFirstSlope, countTreesAllSlopes } from './task.js';

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
    expect(countTreesFirstSlope(input)).toEqual(7);
  });

  it('counts all trees encountered on a map for more than one slope', () => {
    expect(countTreesAllSlopes(input)).toEqual(336);
  });
});
