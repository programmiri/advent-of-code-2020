const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];

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
  return password.every((entry) => {
    return requiredFields.some((field) => field === Object.keys(entry)[0]);
  });
}

export function countValidPasswords() {
  return null;
}
