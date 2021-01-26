let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  for (let j = 0; j < value.length; j += 1) {
  if (value[j] % 2 === 0) {
  console.log(value[j])
    }
  }
}