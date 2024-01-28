import { Split } from "./symbol";
import { removeAnagramDuplicates } from "./map";
import {uniqueArray} from "./set";

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
console.groupEnd('Set');


