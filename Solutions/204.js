//using sieve of erathosthenes => to learn about it go to mycodeschool's youtube video about the said topic
function countPrimes(n) {
    let primes = new Array(n+1).fill(1);
    let result = 0;
    for (let i = 2; i<n; i++) {
      if (primes[i] === 1) {
        result++;
        for (let m = 2; i*m < n; m++) {
          primes[i*m] = 0;
        }
      }
    }
    return result;
  }