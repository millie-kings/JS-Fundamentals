

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const input = Number(process.argv[2]);
const n = Number.isInteger(input) ? input : NaN;

console.log(factorial(isNaN(n) ? 1 : n));
