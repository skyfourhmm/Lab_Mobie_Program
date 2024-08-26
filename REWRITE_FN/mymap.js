const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.mymap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

const value = arr.mymap((item) => item * 2);
console.log(value);
