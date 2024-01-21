
// ------------ Numbers ------------
import { addThousandsSeparator } from "./src/numbers/numFormat.js";
import { getPrimeNumbers } from "./src/numbers/selection.js";

// ------------ Arrays ------------
import { getMaxSubSum } from "./src/arrays/sum.js";



// ------------ Numbers ------------
console.log('Format with a thousand separator', addThousandsSeparator(1465893.12356));
console.log(getPrimeNumbers(-10, 10000000));

// ------------ Arrays ------------
console.log(getMaxSubSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


