export function parseInput(input) {
  return input.trim().split(/\n/);
}

export function findRow(boardingPass) {
  const acc = Array.from(Array(128).keys());
  return boardingPass
    .slice(0, 7)
    .split('')
    .reduce((acc, character) => {
      const rows = acc.length;
      if (character === 'F') {
        acc.splice(rows / 2, rows);
      }
      if (character === 'B') {
        acc.splice(0, rows / 2);
      }
      return acc;
    }, acc)[0];
}

export function findColumn(boardingPass) {
  const acc = Array.from(Array(8).keys());
  return boardingPass
    .slice(7, 10)
    .split('')
    .reduce((acc, character) => {
      const column = acc.length;
      if (character === 'R') {
        acc.splice(0, column / 2);
      }
      if (character === 'L') {
        acc.splice(column / 2, column);
      }
      return acc;
    }, acc)[0];
}

export function getSeatId(row, column) {
  return row * 8 + column;
}

export function findHighestSeatId(input) {
  const boardingPasses = parseInput(input);
  const test = boardingPasses.reduce((acc, boardingPass) => {
    const row = findRow(boardingPass);
    const column = findColumn(boardingPass);
    const seatId = getSeatId(row, column);

    if (seatId > acc) {
      acc = seatId;
    }
    return acc;
  }, 0);
  return test;
}
