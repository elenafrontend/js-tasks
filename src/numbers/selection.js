
function isPrime(num) {
  if (num === 2) {
    return true
  }
  console.log('Math.sqrt', Math.sqrt(num))
  const maxDivider = Math.ceil(Math.sqrt(num));
  console.log("MaxDivider ", maxDivider);
  for (let i = 2; i <= maxDivider; i += 1) {
    console.log(`${num} % ${i} = ${num % i}`);
    if (num % i === 0 && num !== maxDivider) return false;
  }
  return true;
}

export function getPrimeNumbersFromRange(num1, num2) {
  const primes = [];

  for (let i = num1; i <= num2; i += 1) {
    console.log("Number", i);
    if(isPrime(i)) {
      console.log(`${i} - prime`);
      primes.push(i);
    };
  }
  return primes;
}
