module.exports = {
  F1() {
    let result = [];
    for (let i = 1; i < 36; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("Python");
      } else if (i % 3 === 0) {
        result.push("JavaScript");
      } else if (i % 5 === 0) {
        result.push("TypeScript");
      } else {
        result.push(i);
      }
    }
    return result;
  },
};
