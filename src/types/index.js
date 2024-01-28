import { Split } from "./symbol";
import { removeAnagramDuplicates } from "./map";

alert('Use console for demo examples');

console.group('Symbol');
console.log('urlsomePath => url/somePath', 'urlsomePath'.split(new Split('url'))); // "url/somePath"
console.log('somePathurlAnother => url/somePath/url/Another', 'somePathurlAnother'.split(new Split('url'))); // "url/somePath/url/Another"
console.groupEnd('Symbol');

console.group('Map');
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(`Filter anagrams duplicates from [${arr}] `, removeAnagramDuplicates(arr));
console.groupEnd('Map');


