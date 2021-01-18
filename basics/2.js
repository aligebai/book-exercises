let number = 4936
let ones = number % 10
console.log(ones)

number = (number - ones) / 10
console.log(number)

tens = number % 10
console.log(tens)

number = (number - tens) / 10
console.log(number)

hundreds = number % 10
console.log(hundreds)

thousands = (number - hundreds) / 10
console.log(thousands)