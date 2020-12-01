export function find2020(entries) {
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
