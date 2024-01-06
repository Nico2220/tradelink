// O(n) time - where n is the nth fib number
// O(n) space - where n is the nth fib number

type Tuple = [number, number];

function nonFib(n: number): number[] {
  const lastTwoFib: Tuple = [0, 1];
  const nonFibNumbers: number[] = [];
  for (let i = 0; i <= n; i++) {
    const nextFib = lastTwoFib[0] + lastTwoFib[1];
    lastTwoFib[0] = lastTwoFib[1];
    lastTwoFib[1] = nextFib;

    const d = lastTwoFib[0] + lastTwoFib[1];
    // O(1)
    for (let j = nextFib + 1; j < d; j++) {
      if (nonFibNumbers.length === n) {
        break;
      }
      nonFibNumbers.push(j);
    }
  }

  return nonFibNumbers;
}

const result = nonFib(5);
console.log(result);
