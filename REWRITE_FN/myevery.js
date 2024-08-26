const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myevery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

const result = arr.myevery((item) => item % 2 === 0);
console.log(result);
