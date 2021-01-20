function evenOrOdd(promptedNumber) {
  if (Number.isInteger(promptedNumber)) {
  console.log('The argument is an integer')
  } else {
    console.log('The value is not an integer')
  }

  if (promptedNumber % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd')
  }
}

evenOrOdd(9)
