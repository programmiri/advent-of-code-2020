import { parseInput, countAnswers, countAllAnswers } from './task.js';

const input = `
abc

a
b
c

ab
ac

a
a
a
a

b
`;

const parsedInput = ['abc', 'abc', 'abac', 'aaaa', 'b'];

describe('Day six', () => {
  it('parses the data', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });

  it('counts the answers in a group', () => {
    expect(countAnswers(parsedInput[0])).toEqual(3);
    expect(countAnswers(parsedInput[1])).toEqual(3);
    expect(countAnswers(parsedInput[2])).toEqual(3);
    expect(countAnswers(parsedInput[3])).toEqual(1);
    expect(countAnswers(parsedInput[4])).toEqual(1);
  });

  it('counts the answers for every group', () => {
    expect(countAllAnswers(input)).toEqual(11);
  });
});
