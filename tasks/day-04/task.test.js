import {
  countValidPasswords,
  isPasswordValid,
  generatePasswordMap,
} from './task.js';

const input = `
ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in
`;

const parsedInput = [
  [
    { ecl: 'gry' },
    { pid: '860033327' },
    { eyr: '2020' },
    { hcl: '#fffffd' },
    { byr: '1937' },
    { iyr: '2017' },
    { cid: '147' },
    { hgt: '183cm' },
  ],

  [
    { iyr: '2013' },
    { ecl: 'amb' },
    { cid: '350' },
    { eyr: '2023' },
    { pid: '028048884' },
    { hcl: '#cfa07d' },
    { byr: '1929' },
  ],

  [
    { hcl: '#ae17e1' },
    { iyr: '2013' },
    { eyr: '2024' },
    { ecl: 'brn' },
    { pid: '760753108' },
    { byr: '1931' },
    { hgt: '179cm' },
  ],

  [
    { hcl: '#cfa07d' },
    { eyr: '2025' },
    { pid: '166559648' },
    { iyr: '2011' },
    { ecl: 'brn' },
    { hgt: '59in' },
  ],
];
describe('Day four', () => {
  it('parses the data', () => {
    expect(generatePasswordMap(input)).toEqual(parsedInput);
  });

  it('checks that a password is valid', () => {
    expect(isPasswordValid(parsedInput[0])).toBe(true);
    expect(isPasswordValid(parsedInput[1])).toBe(false);
    expect(isPasswordValid(parsedInput[2])).toBe(true);
    expect(isPasswordValid(parsedInput[3])).toBe(false);
  });

  it('counts all valid password', () => {
    expect(countValidPasswords(input)).toEqual(2);
  });
});
