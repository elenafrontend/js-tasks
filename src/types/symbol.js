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

  [Symbol.split](str) {
    let result = this.useLoop(str);
    if (result[0] === '/') {
      result = result.substring(1)
    }
    return result.startsWith(this.delimiter) ? result : `${this.delimiter}/${result}`;
  }

  useSplit(str) {
    return str.split(this.delimiter).join('/url/');
  }

  useLoop(str) {
    const result = [];
    let pos = 0;

    while(pos < str.length) {
      const matchPos = str.indexOf(this.delimiter, pos);
      if (matchPos === -1) {
        result.push(str.substring(pos));
        break
      }
      result.push(`${str.substring(pos, matchPos)}/url/`);
      pos = matchPos + this.delimiter.length;
    }

    return result.join('')
  }
}

console.log('urlsomePath'.split(new Split1('url'))); // "url/somePath"
console.log('somePathurlAnother'.split(new Split1('url'))); // "url/somePath/url/Another"

