export function parseInput(input) {
  return input
    .trim()
    .split(/^\n/gm)
    .map((line) => {
      return line.split(/\n/).join('');
    });
}

export function countAnswers(answers) {
  const uniqueAnswers = new Set(answers);
  return Array.from(uniqueAnswers).length;
}

export function countAllAnswers(input) {
  const answers = parseInput(input);
  return answers.reduce((acc, answersOfOneGroup) => {
    acc = acc + countAnswers(answersOfOneGroup);
    return acc;
  }, 0);
}
