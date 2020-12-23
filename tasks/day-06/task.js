export function parseInputTask1(input) {
  return input
    .trim()
    .split(/^\n/gm)
    .map((line) => {
      return line.split(/\n/).join('');
    });
}

function getUniqueAnswers(answers) {
  const uniqueAnswers = new Set(answers);
  return Array.from(uniqueAnswers);
}

export function countUniqueAnswers(answers) {
  return getUniqueAnswers(answers).length;
}

export function countAllAnswersTask1(input) {
  const answers = parseInputTask1(input);
  return answers.reduce((acc, answersOfOneGroup) => {
    acc = acc + countUniqueAnswers(answersOfOneGroup);
    return acc;
  }, 0);
}

export function parseInputTask2(input) {
  return input
    .trim()
    .split(/^\n/gm)
    .map((line) => {
      return line.trim().split(/\n/);
    });
}

function separateAllAnswers(list) {
  return list.map((entry) => entry.split('')).flat();
}

export function countAnswersTask2(answers) {
  const groupCount = answers.length;
  const allAnswers = separateAllAnswers(answers);
  const uniqueAnswers = getUniqueAnswers(allAnswers);

  return uniqueAnswers.reduce((acc, answer) => {
    const sameAnswerInGroup = allAnswers.filter((entry) => entry === answer);
    if (sameAnswerInGroup.length === groupCount) {
      acc++;
    }
    return acc;
  }, 0);
}

export function countAllAnswersTask2(input) {
  const answers = parseInputTask2(input);

  return answers.reduce((acc, answersOfOneGroup) => {
    acc = acc + countAnswersTask2(answersOfOneGroup);
    return acc;
  }, 0);
}
