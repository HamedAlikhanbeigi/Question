function isDivisibleBySum(n) {
    let sum = 0;
    let num = n.toString();
  
    for (let i = 0; i < num.length; i++) {
      sum += Number(num.charAt(i));
    }
  
    if (n % sum === 0) {
      return "yes";
    } else {
      return "no";
    }
  }
  console.log(isDivisibleBySum(1234)); 
  console.log(isDivisibleBySum(12)); 