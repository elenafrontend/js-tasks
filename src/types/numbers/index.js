
import { addThousandsSeparator } from "./numFormat.js";
import { getPrimeNumbers } from "./selection.js";

alert('Use console for demo examples');

console.log('Format with a thousand separator 1465893.12356 => ', addThousandsSeparator(1465893.12356));
console.log(getPrimeNumbers(-10, 10000000));