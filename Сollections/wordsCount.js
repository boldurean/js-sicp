export default (words, stopWords) => words
  .map((word) => word.toLowerCase())
  .filter((word) => !stopWords.includes(word))
  .reduce((acc, word) => {
    const value = acc.get(word) ?? 0;
    return acc.set(word, value + 1);
  }, new Map());
