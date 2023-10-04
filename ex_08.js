ex_08.js
function houseEnergyScore(housingList) {

  const energyValues = {
    'Villa': 180,
    'Flat': 212,
    'Loft': 340,
    'Castle': 590,
    'Igloo': 12,
    'Hutch': 20,

  };

  housingList.sort((a, b) => energyValues[a[0]] - energyValues[b[0]]);



  const result = housingList.map((housing) => {



    const energyValue = energyValues[housing[0]];



    let grade;

    if (energyValue >= 450) {

      grade = 'G';

    } else if (energyValue >= 330) {

      grade = 'F';

    } else if (energyValue >= 230) {

      grade = 'E';

    } else if (energyValue >= 150) {

      grade = 'D';

    } else if (energyValue >= 90) {

      grade = 'C';

    } else if (energyValue >= 51) {

      grade = 'B';

    } else {

      grade = 'A';
    }

    return [housing[0], energyValue, grade];
  });

  return result;

}

const scores = [
  ["Hutch", 30],
  ["Loft", 345],
  ["Castle", 560],
  ["Igloo", 12],
  ["Villa", 232],
  ["Flat", 212]
];

const sortedscores = houseEnergyScore(scores);

console.log(sortedscores);
displayResult(sortedscores)
