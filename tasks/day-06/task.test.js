import {
  parseInputTask1,
  parseInputTask2,
  countUniqueAnswers,
  countAllAnswersTask1,
  countAnswersTask2,
  countAllAnswersTask2,
} from './task.js';

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

describe('Day six', () => {
  const parsedInput = ['abc', 'abc', 'abac', 'aaaa', 'b'];

  describe('task 1', () => {
    it('parses the data', () => {
      expect(parseInputTask1(input)).toEqual(parsedInput);
    });

    it('counts the answers in a group anybody gave', () => {
      expect(countUniqueAnswers(parsedInput[0])).toEqual(3);
      expect(countUniqueAnswers(parsedInput[1])).toEqual(3);
      expect(countUniqueAnswers(parsedInput[2])).toEqual(3);
      expect(countUniqueAnswers(parsedInput[3])).toEqual(1);
      expect(countUniqueAnswers(parsedInput[4])).toEqual(1);
    });

    it('counts the answers anybody gave for every group', () => {
      expect(countAllAnswersTask1(input)).toEqual(11);
    });
  });

  describe('task 2', () => {
    const parsedInput = [
      ['abc'],
      ['a', 'b', 'c'],
      ['ab', 'ac'],
      ['a', 'a', 'a', 'a'],
      ['b'],
    ];

    it('parses the data', () => {
      expect(parseInputTask2(input)).toEqual(parsedInput);
    });

    it('counts answers in a group everybody gave', () => {
      expect(countAnswersTask2(parsedInput[0])).toEqual(3);
      expect(countAnswersTask2(parsedInput[1])).toEqual(0);
      expect(countAnswersTask2(parsedInput[2])).toEqual(1);
      expect(countAnswersTask2(parsedInput[3])).toEqual(1);
      expect(countAnswersTask2(parsedInput[4])).toEqual(1);
    });

    it('sums the count of answers everybody in the group gave', () => {
      expect(countAllAnswersTask2(input)).toEqual(6);
    });
  });
});
