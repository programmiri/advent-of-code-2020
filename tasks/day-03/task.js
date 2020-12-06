const slope = {
  right: 3,
  down: 1,
};

export function buildMap(input) {
  return input
    .trim()
    .split(/(?:\n)/g)
    .map((line) => [line]);
}

function updateMap(map) {
  return map;
}

function getNewPosition(map, oldPosition) {
  if (oldPosition.line.length >= slope.right) {
    console.log('longer');
  } else {
    console.log('needs more');
  }
}

export function move(input, startRow = 0, startColums = 0, startPosition = 0) {
  const map = buildMap(input);

  const currentPosition = {
    row: startRow,
    colum: startColums,
    line: map[startRow][startColums],
    positionInLine: startPosition,
  };

  const newPostion = getNewPosition(map, currentPosition);

  console.log(newPostion);

  return null;
}

export function countTrees(input) {
  return null;
}
