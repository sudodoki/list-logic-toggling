module.exports = function take(items, offset, limit) {
  return items.concat(items).concat(items).slice(items.length + offset, items.length + offset + Math.min(items.length, limit));
}