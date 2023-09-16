
function baseConversion(num) {
  let Total = 0;
  let number = num.toString();
  for (let i = 0; i < number.length; i++) {
    let remaining = parseInt(number[i]);
    Total += remaining * (3 ** (number.length - 1 - i));
  }
  return Total;
}
console.log(baseConversion(120));

const base3to10 = (num) => {
  return parseInt(num, 3);
}
console.log(base3to10("120"));