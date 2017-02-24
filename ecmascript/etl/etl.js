function transform(input) {
  const output = {};

  for (var key of Object.keys(input)) {
    for (var value of input[key]) {
      output[value.toLowerCase()] = parseInt(key);
    }
  }

  return output;
};

export default transform;
