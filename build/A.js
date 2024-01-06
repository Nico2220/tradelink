"use strict";
// O(n) time - where n is the nth fib number
// O(n) space - where n is the nth fib number
function nonFib(n) {
    const lastTwoFib = [0, 1];
    const nonFibNumbers = [];
    for (let i = 0; i <= n; i++) {
        const nextFib = lastTwoFib[0] + lastTwoFib[1];
        lastTwoFib[0] = lastTwoFib[1];
        lastTwoFib[1] = nextFib;
        const d = lastTwoFib[0] + lastTwoFib[1];
        for (let j = nextFib + 1; j < d; j++) {
            // O(1)
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