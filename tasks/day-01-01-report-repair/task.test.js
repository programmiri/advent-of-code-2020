import { find2020WithTwo, find2020WithThree } from './task.js';

describe('Day one, Report Repair', () => {
  it('returns the two multiplied entries that sum to 2020', () => {
    const entries = [1721, 979, 366, 299, 675, 1456];

    expect(find2020WithTwo(entries)).toBe(514579);
  });

  it('returns the three multiplied entries that sum to 2020', () => {
    const entries = [1721, 979, 366, 299, 675, 1456];

    expect(find2020WithThree(entries)).toBe(241861950);
  });
});
