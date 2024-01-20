
// ------------ Numbers ------------
import { addThousandsSeparator } from "./src/numbers/numFormat.js";
import { getPrimeNumbers } from "./src/numbers/selection.js";

console.log('Format with thousand separator', addThousandsSeparator(1465893.12356));
console.log(getPrimeNumbers(-10, 10000000));