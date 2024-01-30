import { Split } from "./symbol/index.js";
import { removeAnagramDuplicates } from "./map/index.js";
import { uniqueArray, ExtendedSet } from "./set/index.js";

alert('Use console for demo examples');

console.group('Symbol');
console.log('urlsomePath => url/somePath', 'urlsomePath'.split(new Split('url'))); // "url/somePath"
console.log('somePathurlAnother => url/somePath/url/Another', 'somePathurlAnother'.split(new Split('url'))); // "url/somePath/url/Another"
console.groupEnd('Symbol');


console.group('Map');
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(`Filter anagrams duplicates from [${arr}] `, removeAnagramDuplicates(arr));
console.groupEnd('Map');


console.group('Set');
const values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(`Removing duplicates from [${values}]`, uniqueArray(values))

console.group('Implementing basic set operations');
const extSetA = new ExtendedSet([1, 2, 3, 4]);
const extSetBigA = new ExtendedSet([...Array(1000)].map((_, i) => i + 1));
const setB = new Set([6, 7, 9, 10]);
const setBigB = new Set([...Array(10100)].map((_, i) => i + 1 + 100));
const setC = new Set([3, 4, 5, 6]);

console.log(`intersection {${[...extSetA]}} and {${[...setC]}} => `);
console.log(extSetA.intersection(setC))
console.log(`intersection SetA 1000 & SetB 10000 elem => `);
console.log(extSetBigA.intersection(setBigB))

console.log(`ExtendedSet call chain symmetricDifference between {${[...extSetA]}} and {${[...setC]}} + union {${[...setB]}}`);
console.log(extSetA.symmetricDifference(setC).union(setB))
console.groupEnd('Implementing basic set operations');

console.groupEnd('Set');


