let order = { apple: 5, oranges: 7, banana: 8 };

let wareHouses = [
  { name: "owd", inventory: { apple: 6, orange: 10 } },
  { name: "dm", inventory: { banana: 5, orange: 10, apple: 3 } },
];

function allocate() {
  let orderAvailable = [];
  console.log(wareHouses[0]);
  if (order - wareHouses[0].inventory <= 0) {
    return [];
  }
  if (order - wareHouses[0] >= 1) {
    order - wareHouses[1];
  }
}
