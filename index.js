
// ------------ Numbers ------------
import { addThousandsSeparator } from "./src/numbers/numFormat.js";
import { getPrimeNumbersFromRange } from "./src/numbers/selection.js";

console.log('Format with thousand separator', addThousandsSeparator(1465893.12356));
console.log("Primes between 2 and 10: ", getPrimeNumbersFromRange(2, 10));