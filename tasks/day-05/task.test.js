import {
  parseInput,
  findRow,
  findColumn,
  getSeatId,
  findHighestSeatId,
  getAllSeatIds,
  findMissingSeatId,
} from './task.js';

const input = `
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL
`;

const parsedInput = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
describe('Day five', () => {
  describe('task 1', () => {
    it('parses the data', () => {
      expect(parseInput(input)).toEqual(parsedInput);
    });

    it('finds row', () => {
      expect(findRow('FBFBBFFRLR')).toEqual(44);
    });

    it('finds colum', () => {
      expect(findColumn('FBFBBFFRLR')).toEqual(5);
    });

    it('gets seat id', () => {
      expect(getSeatId(44, 5)).toEqual(357);
    });

    it('finds the highest seatId', () => {
      expect(findHighestSeatId(input)).toEqual(820);
    });
  });
  describe('task 2', () => {
    it('get all seats sorted from low to high', () => {
      expect(getAllSeatIds(input)).toEqual([119, 567, 820]);
    });

    it('finds missing seat id', () => {
      const seatIds = [100, 101, 102, 104, 105, 106];
      expect(findMissingSeatId(seatIds)).toEqual(103);
    });
  });
});
