export const identity = (word) => word;

export const wc = (word, text) => {
  const re = new RegExp(word, 'g');
  return (text.match(re) || []).length;
};
