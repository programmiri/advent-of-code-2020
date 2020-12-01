export function find2020WithTwo(entries) {
  let firstEntry = null;
  let secondEntry = null;

  entries.forEach((entry) => {
    entries.forEach((entryToSum) => {
      if (entry + entryToSum == 2020) {
        firstEntry = entry;
        secondEntry = entryToSum;
      }
    });
  });
  return firstEntry * secondEntry;
}

export function find2020WithThree(entries) {
  let firstEntry = null;
  let secondEntry = null;
  let thirdEntry = null;

  entries.forEach((entry) => {
    entries.forEach((firstEntryToSum) => {
      entries.forEach((secondEntryToSum) => {
        if (entry + firstEntryToSum + secondEntryToSum == 2020) {
          firstEntry = entry;
          secondEntry = firstEntryToSum;
          thirdEntry = secondEntryToSum;
        }
      });
    });
  });
  return firstEntry * secondEntry * thirdEntry;
}
