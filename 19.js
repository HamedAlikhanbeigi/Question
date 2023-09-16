
const digitType=(num)=>{
    let result = {
        odd: 0,
        even: 0,
        zero: 0
    };
    while (num > 0) {
        let crrDigit = num % 10;
        if (crrDigit === 0) {
            result.zero++;
        } else if (crrDigit % 2 === 0) {
            result.even++;
        } else {
            result.odd++;
        }
        num = Math.floor(num / 10);
    }
    return result;
}
console.log(digitType(1205));