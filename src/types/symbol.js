// https://doka.guide/js/symbol/#na-sobesedovanii
// Напишите свой класс, который бы являлся стратегией к функции split, используя Symbol. Пример:
//
// console.log('urlsomePath'.split(new Split1('url'))); // "url/somePath"
// console.log('somePathurlAnother'.split(new Split1('url'))); // "url/somePath/url/Another"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#using_a_custom_splitter
class Split1 {
  constructor(delimiter) {
    this.delimiter = delimiter
  }

  // using split
  [Symbol.split](str) {
    const result = str.split(this.delimiter).join('/url/');
    return result[0] === '/' ? result.substring(1) : result;
  }
}

console.log('urlsomePath'.split(new Split1('url'))); // "url/somePath"
console.log('somePathurlAnother'.split(new Split1('url'))); // "url/somePath/url/Another"