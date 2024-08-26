const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myreduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

const result = arr.myreduce((acc, item) => acc + item, 0);
console.log(result);
