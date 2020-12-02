export function parseInput(input) {
  return input
    .trim()
    .split(/\n/g)
    .map((listItem) => {
      const parsedList = listItem.split(/(?:\s|-|:)+/);
      return {
        lowest: parseInt(parsedList[0]),
        highest: parseInt(parsedList[1]),
        letter: parsedList[2],
        password: parsedList[3],
      };
    });
}

export function isPasswordValid(passwordData) {
  const regex = new RegExp(passwordData.letter, 'g');
  const matchedLetter = (passwordData.password.match(regex) || []).length;

  return (
    matchedLetter >= passwordData.lowest &&
    matchedLetter <= passwordData.highest
  );
}

export function countValidPasswords(input) {
  const parsedInput = parseInput(input);

  return parsedInput.filter((passwordData) => isPasswordValid(passwordData))
    .length;
}
