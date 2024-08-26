var calcAverage = (a, b, c) => (a + b + c) / 3;
var avgDolphins = calcAverage(44, 23, 71);
var avgKoalas = calcAverage(65, 54, 49);

var checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner();
