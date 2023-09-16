
function calculateP(N) {
    let p = 0;
    for (let i = 1; i <= N; i++) {
      p += 1 / (3 * i);
    }
    return p;
  }
  
  // محاسبه مقدار s
  function calculateS(X, N) {
    let s = 0;
    let sign = 1;
    for (let i = 0; i <= N; i++) {
      s += sign * Math.pow(X, i);
      sign *= -1;
    }
    return s;
  }
  
  // محاسبه مقدار sin(X)
  function calculateSin(X, N) {
    let sinX = 0;
    let sign = 1;
    for (let i = 1; i <= N; i += 2) {
      sinX += (sign / factorial(i)) * Math.pow(X, i);
      sign *= -1;
    }
    return sinX;
  }
  
  // محاسبه فاکتوریل
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // محاسبه مقدار T
  function calculateT(N) {
    let T = 0;
    let factorialResult = 1;
    for (let i = 1; i <= N; i++) {
      factorialResult *= i;
      T += factorialResult;
    }
    return T;
  }
  
  // تست توابع
  const N = 5;
  const X = 2;
  
  console.log(`p = ${calculateP(N)}`);
  console.log(`s = ${calculateS(X, N)}`);
  console.log(`sin(X) = ${calculateSin(X, N)}`);
  console.log(`T = ${calculateT(N)}`);
  