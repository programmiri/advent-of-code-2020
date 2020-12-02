import {
  parseInput,
  isPasswordValidOldPolicy,
  countValidPasswordsOldPolicy,
  isPasswordValidNewPolicy,
  countValidPasswordsNewPolicy,
} from './task.js';

describe('Day two', () => {
  const input = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
  const parsedOutput = [
    { firstNum: 1, secondNum: 3, letter: 'a', password: 'abcde' },
    { firstNum: 1, secondNum: 3, letter: 'b', password: 'cdefg' },
    { firstNum: 2, secondNum: 9, letter: 'c', password: 'ccccccccc' },
  ];

  it('parses the input to work with it', () => {
    expect(parseInput(input)).toEqual(parsedOutput);
  });

  it('checks if a password is valid with an old policy', () => {
    expect(isPasswordValidOldPolicy(parsedOutput[0])).toBe(true);
    expect(isPasswordValidOldPolicy(parsedOutput[1])).toBe(false);
    expect(isPasswordValidOldPolicy(parsedOutput[2])).toBe(true);
  });

  it('checks if a password is valid with the new policy', () => {
    expect(isPasswordValidNewPolicy(parsedOutput[0])).toBe(true);
    expect(isPasswordValidNewPolicy(parsedOutput[1])).toBe(false);
    expect(isPasswordValidNewPolicy(parsedOutput[2])).toBe(false);
  });

  it('returns the number of valid passwords with an old policy', () => {
    expect(countValidPasswordsOldPolicy(input)).toEqual(2);
  });

  it('returns the number of valid passwords with the new policy', () => {
    expect(countValidPasswordsNewPolicy(input)).toEqual(1);
  });
});
