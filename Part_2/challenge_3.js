const physique = {
  mark: {
    higher: 78,
    width: 1.69,
  },
  john: {
    higher: 92,
    width: 1.95,
  },
};

var BMI = function (mass, height) {
  return mass / (height * height);
};

var johnBMI = BMI(physique.john.higher, physique.john.width);
var markBMI = BMI(physique.mark.higher, physique.mark.width);

var markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(
    `Mark BMI (${physique.mark.higher}, ${physique.mark.width}) cao hơn John (${physique.john.higher}, ${physique.john.width})!`
  );
} else {
  console.log(
    `John BMI (${physique.john.higher}, ${physique.john.width}) cao hơn Mark (${physique.mark.height}, ${physique.mark.width})!`
  );
}
