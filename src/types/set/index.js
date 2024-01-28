
// ----------------------------------------------------
/**
 * Removes duplicates from an array.
 * @param {Array} arr - The array to remove duplicates from.
 * @returns {Array} - A new array with duplicates removed.
 */
export function uniqueArray(arr) {
  return [...new Set(arr)];
}
