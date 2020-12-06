import { buildMap, move } from './task.js';

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
  it('builds the map', () => {
    const expectedMap = [
      ['..##.......'],
      ['#...#...#..'],
      ['.#....#..#.'],
      ['..#.#...#.#'],
      ['.#...##..#.'],
      ['..#.##.....'],
      ['.#.#.#....#'],
      ['.#........#'],
      ['#.##...#...'],
      ['#...##....#'],
      ['.#..#...#.#'],
    ];

    expect(buildMap(input)).toEqual(expectedMap);
  });

  it('moves in a slope on a map', () => {
    expect(move(input)).toEqual('hello');
  });
});
