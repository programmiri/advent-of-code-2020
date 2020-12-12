const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

export function generatePasswordMap(input) {
  return input
    .trim()
    .split(/(\n\n)/g)
    .map((entry) => entry.replace(/\n/g, ' '))
    .filter((entry) => entry !== '  ')
    .map((entry) => {
      return entry.split(' ').map((subEntry) => {
        const data = subEntry.split(':');
        return { [data[0]]: data[1] };
      });
    });
}

export function isPasswordValidTask1(password) {
  const passwordsKeys = password.map((entry) => Object.keys(entry)[0]);
  return requiredFields.every((key) => passwordsKeys.includes(key));
}

export function countValidPasswords1(input) {
  const passwordMap = generatePasswordMap(input);

  return passwordMap.reduce((acc, curr) => {
    if (isPasswordValidTask1(curr)) {
      acc++;
    }
    return acc;
  }, 0);
}

function numberInBewtween(data, min, max) {
  const number = parseInt(data);
  return number >= min && number <= max;
}

const validatorByr = (data) => numberInBewtween(data, 1920, 2002);
const validatorIyr = (data) => numberInBewtween(data, 2010, 2020);
const validatorEyr = (data) => numberInBewtween(data, 2020, 2030);

function validatorHgt(data) {
  const correctData = /^(\d+)(cm|in)$/.test(data);
  if (!correctData) return false;
  if (data.match(/(in)$/)) {
    const number = data.replace('in', '');
    return numberInBewtween(number, 59, 76);
  }
  const number = data.replace('cm', '');
  return numberInBewtween(number, 150, 193);
}

function validatorHcl(data) {
  return /^#[a-f0-9]+$/.test(data);
}

function validatorEcl(data) {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(data);
}

function validatorPid(data) {
  return /^\d{9}$/.test(data);
}

export const requiredFieldsAndData = {
  byr: validatorByr,
  iyr: validatorIyr,
  eyr: validatorEyr,
  hgt: validatorHgt,
  hcl: validatorHcl,
  ecl: validatorEcl,
  pid: validatorPid,
};

export function isPasswordValidTask2(password) {
  const isRequiredDataPresent = isPasswordValidTask1(password);
  if (!isRequiredDataPresent) return false;

  return password.every((field) => {
    const requiredFieldIdentifier = Object.keys(field)[0];
    if (requiredFieldIdentifier === 'cid') return true;
    const requiredField = Object.values(field)[0];
    return requiredFieldsAndData[requiredFieldIdentifier](requiredField);
  });
}

export function countValidPasswords2(input) {
  const passwordMap = generatePasswordMap(input);

  return passwordMap.reduce((acc, curr) => {
    if (isPasswordValidTask2(curr)) {
      acc++;
    }
    return acc;
  }, 0);
}
