const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myany = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

const result = arr.myany((item) => item % 2 === 0);