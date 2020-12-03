const wordsCount = (words, stopWords) => words
  .map((word) => word.toLowerCase())
  .filter((word) => !stopWords.includes(word))
  .reduce((acc, word) => {
    const value = acc.get(word) ?? 0;
    return acc.set(word, value + 1);
  }, new Map());

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];

console.log(wordsCount(words, stopWords));
