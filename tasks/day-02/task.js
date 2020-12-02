export function parseInput(input) {
  return input
    .trim()
    .split(/\n/g)
    .map((listItem) => {
      const parsedList = listItem.split(/(?:\s|-|:)+/);
      return {
        firstNum: parseInt(parsedList[0]),
        secondNum: parseInt(parsedList[1]),
        letter: parsedList[2],
        password: parsedList[3],
      };
    });
}

export function isPasswordValidOldPolicy(passwordData) {
  const regex = new RegExp(passwordData.letter, 'g');
  const matchedLetter = (passwordData.password.match(regex) || []).length;

  return (
    matchedLetter >= passwordData.firstNum &&
    matchedLetter <= passwordData.secondNum
  );
}

export function isPasswordValidNewPolicy(passwordData) {
  return (
    (passwordData.password[passwordData.firstNum - 1] === passwordData.letter &&
      passwordData.password[passwordData.secondNum - 1] !==
        passwordData.letter) ||
    (passwordData.password[passwordData.firstNum - 1] !== passwordData.letter &&
      passwordData.password[passwordData.secondNum - 1] === passwordData.letter)
  );
}

export function countValidPasswords(validator, input) {
  const parsedInput = parseInput(input);

  return parsedInput.filter((passwordData) => validator(passwordData)).length;
}

export const countValidPasswordsOldPolicy = countValidPasswords.bind(
  null,
  isPasswordValidOldPolicy
);

export const countValidPasswordsNewPolicy = countValidPasswords.bind(
  null,
  isPasswordValidNewPolicy
);
