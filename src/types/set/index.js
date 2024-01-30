

/**
 * Removes duplicates from an array.
 * @param {Array} arr - The array to remove duplicates from.
 * @returns {Array} - A new array with duplicates removed.
 */
export function uniqueArray(arr) {
  return [...new Set(arr)];
}


// ----------------------------------------------------
// Implementing basic set operations

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// Disable the ForOfStatement rule for implementing the for of loop with a Set object.

// --------------------- union
export function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

// --------------------- difference
export function difference(setA, setB) {
  const result = new Set(setA);
  
  // eslint-disable-next-line no-restricted-syntax
  for(const item of setB) {
    result.delete(item);
  }
  return result;
}

// --------------------- symmetricDifference
export function symmetricDifference(setA, setB) {
  const result = new Set(setA);

  console.group('SymmetricDifference');
  console.time('For of');
  for( const item of setB) {
    if (!result.delete(item)) {
      result.add(item);
    }
  }
  console.timeEnd('For of');

  console.time('forEach');
  setB.forEach(item => {
    if (!result.delete(item)) {
      result.add(item);
    }
  })
  console.timeEnd('forEach');

  console.groupEnd('SymmetricDifference');
  return result;
}


// --------------------- intersection
export function intersection(setA, setB) {
  console.group('Set intersection');
  console.time('For of');
  let result = new Set();

  for (const item of setB) {
    if (setA.has(item)) {
      result.add(item);
    }
  }
  console.timeEnd('For of');

  console.time('Array');
  result = new Set([...setA].filter(elem => setB.has(elem)));
  console.timeEnd('Array');

  console.groupEnd('Set intersection');
  return result;
}


const setA = new Set([1, 2, 3, 4]);
const setC = new Set([3, 4, 5, 6]);
const setBigA = new Set([...Array(1000)].map((_, i) => i + 1));
const setBigB = new Set([...Array(10100)].map((_, i) => i + 1 + 100));

console.log(`union {${[...setA]}} and {${[...setC]}}`, union(setA, setC));
console.log('difference', difference(setA, setC));
console.log(`symmetricDifference between {${[...setA]}} and {${[...setC]}} => `, symmetricDifference(setBigA, setBigB)); // returns Set {1, 2, 5, 6});
console.log(`intersection {${[...setA]}} and {${[...setC]}} => `, intersection(setA, setC));
console.log(`intersection SetA 1000 & SetB 10000 elem => `, intersection(setBigA, setBigB));