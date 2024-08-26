const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myfind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
  return undefined;
};

const value = arr.myfind((item) => item % 2 === 0);
console.log(value);
