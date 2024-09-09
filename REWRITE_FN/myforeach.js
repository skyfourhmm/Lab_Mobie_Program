const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myforeach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
  console.log(this);
  return this;
};

const result = arr.myforeach((item) => item * 2);
console.log(result);
