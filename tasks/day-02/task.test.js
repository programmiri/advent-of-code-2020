import { parseInput, isPasswordValid, countValidPasswords } from './task.js';

describe('Day two', () => {
  const input = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
  const parsedOutput = [
    { lowest: 1, highest: 3, letter: 'a', password: 'abcde' },
    { lowest: 1, highest: 3, letter: 'b', password: 'cdefg' },
    { lowest: 2, highest: 9, letter: 'c', password: 'ccccccccc' },
  ];

  it('parses the input to work with it', () => {
    expect(parseInput(input)).toEqual(parsedOutput);
  });

  it('checks if a password is valid', () => {
    expect(isPasswordValid(parsedOutput[0])).toBe(true);
    expect(isPasswordValid(parsedOutput[1])).toBe(false);
    expect(isPasswordValid(parsedOutput[2])).toBe(true);
  });

  it('returns the number of valid passwords', () => {
    expect(countValidPasswords(input)).toEqual(2);
  });
});
