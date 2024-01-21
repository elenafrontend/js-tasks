
function isPrime(num) {
  if (num < 0) {
    return false;
  }
  const maxDivider = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= maxDivider; i += 1) {
    if (num % i === 0 && num !== maxDivider) return false;
  }
  return num > 1;
}

export function getPrimeNumbers(start, end) {

  console.group(`Primes between ${start} and ${end}: `)

  // with loop O(n^2)
  {
    console.time('with loop O(n^2)')
    const primes = [];
    for (let i = start; i <= end; i += 1) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    console.timeEnd('with loop O(n^2)');
  }

  // with array O(n^2)
  console.time('with array O(n^2)')
  Array.from({length: end - start + 1},
      (_, index) => index + start).filter(isPrime);

  console.timeEnd('with array O(n^2)');

  // with sieve of Eratosthenes
  console.time('with sieve of Eratosthenes O(n log log n)');
  let primes = [];
  const sieve = [];

  for (let i = 0; i < end; i += 1) {
    if (i >= 2 && !sieve[i]) {
      primes.push(i);
      for (let j = i * i; j < end; j += i) {
        sieve[j] = true;
      }
    }
  }
  // can return this right away
  // necessary for measuring time
  primes = primes.filter(number => number >= start);
  console.timeEnd('with sieve of Eratosthenes O(n log log n)');

  console.groupEnd();
  return primes;
}


