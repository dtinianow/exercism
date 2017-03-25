function keep(items, passesCondition) {
  kept = [];
  for (let i = 0; i < items.length; i++)
    if (passesCondition(items[i]))
      kept.push(items[i]);
  return kept;
};

function discard(items, passesCondition) {
  let failsCondition = function(item) { return !passesCondition(item) };
  return keep(items, failsCondition);
};

module.exports = { keep, discard };
