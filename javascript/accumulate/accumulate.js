function accumulate(items, func) {
  const acc = [];
  for (let i = 0; i < items.length; i++)
    acc.push(func(items[i]));
  return acc;
}

module.exports = accumulate;
