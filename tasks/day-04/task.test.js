import {
  countValidPasswords1,
  isPasswordValidTask1,
  generatePasswordMap,
  requiredFieldsAndData,
  isPasswordValidTask2,
  countValidPasswords2,
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

  describe('task 1', () => {
    it('checks that a password is valid for task 1', () => {
      expect(isPasswordValidTask1(parsedInput[0])).toBe(true);
      expect(isPasswordValidTask1(parsedInput[1])).toBe(false);
      expect(isPasswordValidTask1(parsedInput[2])).toBe(true);
      expect(isPasswordValidTask1(parsedInput[3])).toBe(false);
    });

    it('counts all valid password for task 1', () => {
      expect(countValidPasswords1(input)).toEqual(2);
    });
  });

  describe('task 2', () => {
    it('validates data for field byr', () => {
      expect(requiredFieldsAndData.byr('2002')).toBe(true);
      expect(requiredFieldsAndData.byr('1980')).toBe(true);
      expect(requiredFieldsAndData.byr('2003')).toBe(false);
    });

    it('validates data for field hgt', () => {
      expect(requiredFieldsAndData.hgt('60in')).toBe(true);
      expect(requiredFieldsAndData.hgt('190cm')).toBe(true);
      expect(requiredFieldsAndData.hgt('74in')).toBe(true);
      expect(requiredFieldsAndData.hgt('190in')).toBe(false);
      expect(requiredFieldsAndData.hgt('190')).toBe(false);
    });

    it('validates data for field hcl', () => {
      expect(requiredFieldsAndData.hcl('#123abc')).toBe(true);
      expect(requiredFieldsAndData.hcl('#623a2f')).toBe(true);
      expect(requiredFieldsAndData.hcl('#123abz')).toBe(false);
      expect(requiredFieldsAndData.hcl('123abc')).toBe(false);
    });

    it('validates data for field ecl', () => {
      expect(requiredFieldsAndData.ecl('brn')).toBe(true);
      expect(requiredFieldsAndData.ecl('grn')).toBe(true);
      expect(requiredFieldsAndData.ecl('wat')).toBe(false);
    });

    it('validates data for field pid', () => {
      expect(requiredFieldsAndData.pid('000000001')).toBe(true);
      expect(requiredFieldsAndData.pid('087499704')).toBe(true);
      expect(requiredFieldsAndData.pid('0123456789')).toBe(false);
    });

    it('return false for an invalid password for task 2', () => {
      const password = [
        { eyr: '1972' },
        { cid: '100' },
        { hcl: '#18171d' },
        { ecl: 'amb' },
        { hgt: '170' },
        { pid: '186cm' },
        { iyr: '2018' },
        { byr: '1926' },
      ];

      expect(isPasswordValidTask2(password)).toBe(false);
    });

    it('return false for an invalid password for task 2', () => {
      const password = [
        { iyr: '2019' },
        { hcl: '#602927' },
        { eyr: '1967' },
        { hgt: '170cm' },
        { ecl: 'grn' },
        { pid: '012533040' },
        { byr: '1946' },
      ];

      expect(isPasswordValidTask2(password)).toBe(false);
    });

    it('return true for an valid password for task 2', () => {
      const password = [
        { pid: '087499704' },
        { hgt: '74in' },
        { ecl: 'grn' },
        { iyr: '2012' },
        { eyr: '2030' },
        { byr: '1980' },
        { hcl: '#623a2f' },
      ];

      expect(isPasswordValidTask2(password)).toBe(true);
    });

    it('counts valid passwords for task 2', () => {
      expect(countValidPasswords2(input)).toBe(2);
    });
  });
});
