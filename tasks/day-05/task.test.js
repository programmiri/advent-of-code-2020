import {
  parseInput,
  findRow,
  findColumn,
  getSeatId,
  findHighestSeatId,
} from './task.js';

const input = `
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL
`;

const parsedInput = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
describe('Day five', () => {
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
