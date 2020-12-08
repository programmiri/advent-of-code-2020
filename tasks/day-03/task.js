let map = null;
let position = null;
let treeCount = null;

function buildMap(input) {
  map = input
    .trim()
    .split(/(?:\n)/g)
    .map((line) => [line]);
}

function getNewPosition(oldPosition, slope) {
  if (position.line === null) {
    return {
      line: 0,
      positionInLine: 0,
    };
  }

  const newline = oldPosition.line + slope.down;
  if (map.length < newline) {
    return oldPosition;
  }
  const newPositionInLine = oldPosition.positionInLine + slope.right;

  const lenghtLine = map[newline][0].length;
  const positionInLine = newPositionInLine;

  if (lenghtLine <= positionInLine + slope.right) {
    const duplicationNeeded = Math.ceil(
      (positionInLine + slope.right) / lenghtLine
    );

    const lineToDuplicate = map[newline][0];
    for (let i = 0; i <= duplicationNeeded; i++) {
      map[newline] = [map[newline][0] + lineToDuplicate];
    }
  }

  return { line: newline, positionInLine: newPositionInLine };
}

function setPosition(oldPosition, slope) {
  position = getNewPosition(oldPosition, slope);
}

function countTrees() {
  const field = map[position.line][0].charAt(position.positionInLine);
  if (field === '#') {
    treeCount++;
  }
}

function initializeGlobals(input) {
  buildMap(input);
  position = {
    line: null,
    positionInLine: null,
  };
  treeCount = 0;
}

export function countTreesFirstSlope(input) {
  initializeGlobals(input);

  const slope = {
    right: 3,
    down: 1,
  };

  for (let i = 0; i < map.length; i++) {
    setPosition(position, slope);
    countTrees();
  }
  return treeCount;
}

export function countTreesAllSlopes(input) {
  const slopes = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  return slopes
    .reduce((acc, curr) => {
      initializeGlobals(input);
      for (let i = 0; i < map.length; i++) {
        setPosition(position, curr);
        countTrees();
      }
      acc.push(treeCount);
      return acc;
    }, [])
    .reduce((acc, curr) => acc * curr);
}
