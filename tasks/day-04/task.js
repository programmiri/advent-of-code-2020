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

export function isPasswordValid(password) {
  const passwordsKeys = password.map((entry) => Object.keys(entry)[0]);
  return requiredFields.every((key) => passwordsKeys.includes(key));
}

export function countValidPasswords(input) {
  const passwordMap = generatePasswordMap(input);

  return passwordMap.reduce((acc, curr) => {
    if (isPasswordValid(curr)) {
      acc++;
    }
    return acc;
  }, 0);
}
