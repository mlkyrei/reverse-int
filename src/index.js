module.exports = function reverse (n) {
    let a = Math.abs(n);
    let results = '';
    let str = a.toString();
    for (let i = 1; i <= str.length; i++) {
        results += str[str.length - i];
    }
  return Number(results);
}
