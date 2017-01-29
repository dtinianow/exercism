class Words {
  count(input) {
    return input
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .reduce((acc, word) => {
        acc.hasOwnProperty(word) ? acc[word]++ : acc[word] = 1;
        return acc;
      }, {});
  }
}

export default Words;
