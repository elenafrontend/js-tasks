function getPrimeNumbersFromRange(num1, num2) {
  const primes = [];
  for (let i = num1; i <= num2; i++) {
    console.log("Number", i);
    if(!isPrime(i)) continue;
    console.log(`${i} - prime`);
    primes.push(i);
  }
  return primes;
}

function isPrime(num) {
  const maxDivider = Math.ceil(Math.sqrt(num));
  console.log("MaxDivider ", maxDivider);
  for (let i = 2; i <= maxDivider; i++) {
    console.log(`${num} % ${i} = ${num % i}`);
    if (num % i === 0 && num !== maxDivider) return false;
  }
  return true;
}

console.log("Primes between 2 and 10: ", getPrimeNumbersFromRange(2, 10));
