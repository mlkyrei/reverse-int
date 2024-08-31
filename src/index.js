module.exports = function reverse (n) {
    let results = '';
    let str = n.toString();
    for (let i = 1; i <= str.length; i++) {
        results += str[str.length - i];
    }
  return Number(results);
}
