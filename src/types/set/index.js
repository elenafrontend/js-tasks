

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

export class ExtendedSet extends Set {
  // --------------------- union
  union(setB) {
    return new ExtendedSet([...this, ...setB]);
  }

  // --------------------- difference
  difference(setB) {
    const result = new ExtendedSet(this);

    for(const item of setB) {
      result.delete(item);
    }
    return result;
  }

  // --------------------- symmetricDifference
  symmetricDifference(setB) {
    let result = new ExtendedSet(this);

    console.group('SymmetricDifference');
    console.time('For of');
    for( const item of setB) {
      if (!result.delete(item)) {
        result.add(item);
      }
    }
    console.timeEnd('For of');

    result = new ExtendedSet(this);
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
  intersection(setB) {
    console.group('Set intersection');
    console.time('For of');
    let result = new ExtendedSet();

    for (const item of setB) {
      if (this.has(item)) {
        result.add(item);
      }
    }
    console.timeEnd('For of');

    console.time('Array');
    result = new ExtendedSet([...this].filter(elem => setB.has(elem)));
    console.timeEnd('Array');

    console.groupEnd('Set intersection');
    return result;
  }
}