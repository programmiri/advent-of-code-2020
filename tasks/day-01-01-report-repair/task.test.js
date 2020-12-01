import { find2020 } from './task.js';

describe('Day one, Report Repair', () => {
  it('returns the multiplied entries that sum to 2020', () => {
    const entries = [1721, 979, 366, 299, 675, 1456];

    expect(find2020(entries)).toBe(514579);
  });
});
