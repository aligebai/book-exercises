function numberRange(givenNumber) {
  if (givenNumber >= 0 && givenNumber <= 50) {
    console.log(`${givenNumber} is between 0 and 50`);
  } else if (givenNumber >= 51 && givenNumber <= 100) {
    console.log(`${givenNumber} is between 51 and 100`);
  } else if (givenNumber > 100) {
    console.log(`${givenNumber} is greater than 100`)
  } else {
    console.log(`${givenNumber} is less than 0`)
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

//This isn't the best way of it being executed. I could've
//started with if givenNumber < 0, and from there, do else.
//function numberRange(number) {
 // if (number < 0) {
//    console.log(`${number} is less than 0`);
//  } else if (number <= 50) {
//    console.log(`${number} is between 0 and 50`);
//  } else if (number <= 100) {
//    console.log(`${number} is between 50 and 100`);
//  } else {
//    console.log(`${number} is greater than 100`);
//  }
//}


