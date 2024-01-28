
// https://javascript.info/map-set#filter-anagrams
/**
 * Filter anagrams duplicates from an array.
 * Anagrams are words or phrases formed by rearranging the letters of another word or phrase.
 * @param {Array} arr - The array to filter anagrams from.
 * @returns {Array} - A new array with anagram duplicates removed
 */
export function removeAnagramDuplicates(arr) {

  const wordsMap = new Map();

  arr.forEach(word => {
    const sortedChars = word.toLowerCase().split('').sort().join();
    if (!wordsMap.has(sortedChars)) wordsMap.set(sortedChars, word);
  })

  return [...wordsMap.values()];
}