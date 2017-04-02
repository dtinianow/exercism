function accumulate(items, callback) {
  const results = [];
  items.forEach(item => results.push(callback(item)));
  return results;
}

module.exports = accumulate;
