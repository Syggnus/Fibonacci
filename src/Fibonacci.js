class Fibonacci {
  verifyNumber(num) {
    num = parseInt(num);

    let a = 0
    let b = 1;
    
    let fibonacci = [a];
  
    while (b <= num) {
      fibonacci.push(b);
      [a, b] = [b, a + b];
    }
  
    if (fibonacci.includes(num)) {
      console.log(`${num} faz parte da sequência de Fibonacci \n`);
    } else {
      console.log(`${num} não faz parte da sequência de Fibonacci \n`);
    }
  }
}

module.exports = { Fibonacci };