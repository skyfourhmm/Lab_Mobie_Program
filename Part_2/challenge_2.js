var bill = [125, 555, 44];
var tip = [];
var total = [];

for (let i = 0; i < bill.length; i++) {
  tip[i] = bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;
  total[i] = bill[i] + tip[i];
}

for (let i = 0; i < bill.length; i++) {
  console.log(
    `Hóa đơn là ${bill[i]}, tiền boa là ${tip[i]} và tổng giá trị là ${total[i]}`
  );
}
