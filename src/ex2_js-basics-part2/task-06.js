//task-06
let primeNumbers = function (n) {
    if (n < 2) {
      return 'Не причисляется ни к простым, ни к составным числам';
    } 
    if (n > 1000){
        return 'Данные неверные';
    } 
    let i = 2;
    const root = Math.sqrt(n);
    while (i <= root) {
      if (n % i === 0) {
        return 'Составное число';
      }
      i +=1;
    }   
    return 'Простое число';
  }
  console.log(26, primeNumbers(26));
  console.log(2, primeNumbers(2));
  console.log(0, primeNumbers(0));
  console.log(1001, primeNumbers(1001));

  module.exports = primeNumbers;
