ex_09.js
function addHousing(housingList, newHouse, quantity) {
  if (housingList.has(newHouse)) {
    const currentQuantity = housingList.get(newHouse);
    housingList.set(newHouse, currentQuantity + quantity);
  } else {
    housingList.set(newHouse, quantity);
  }
}
let housingList = new Map();

addHousing(housingList, "Flat", 2);
addHousing(housingList, "Log", 3);
addHousing(housingList, "Flat", 3);
addHousing(housingList, "Hutch", 2);
displayResult(housingList);
