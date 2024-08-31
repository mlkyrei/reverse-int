module.exports = function reverse (n) {
    let a = Math.abs(n);
    let results = '';
    let str = a.toString();
    for (let i = 1; i <= a.length; i++) {
        results += str[a.length - i];
    }
  return Number(results);
}
