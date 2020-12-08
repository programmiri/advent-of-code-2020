const SLOPE = {
  right: 3,
  down: 1,
};

let map = null;

let position = {
  line: null,
  positionInLine: null,
};

let treeCount = 0;

function buildMap(input) {
  map = input
    .trim()
    .split(/(?:\n)/g)
    .map((line) => [line]);
}

function getNewPosition(oldPosition) {
  if (position.line === null) {
    return {
      line: 0,
      positionInLine: 0,
    };
  }

  const newline = oldPosition.line + SLOPE.down;
  const newPositionInLine = oldPosition.positionInLine + SLOPE.right;

  const lenghtLine = map[newline][0].length;
  const positionInLine = newPositionInLine;

  if (lenghtLine <= positionInLine + SLOPE.right) {
    const duplicationNeeded = Math.ceil(
      (positionInLine + SLOPE.right) / lenghtLine
    );

    const lineToDuplicate = map[newline][0];
    for (let i = 0; i <= duplicationNeeded; i++) {
      map[newline] = [map[newline][0] + lineToDuplicate];
    }
  }

  return { line: newline, positionInLine: newPositionInLine };
}

function setPosition(oldPosition) {
  position = getNewPosition(oldPosition);
}

function countTrees() {
  const field = map[position.line][0].charAt(position.positionInLine);
  if (field === '#') {
    treeCount++;
  }
}

export function countAllTrees(input) {
  buildMap(input);

  for (let i = 0; i < map.length; i++) {
    setPosition(position);
    countTrees();
  }
  return treeCount;
}
