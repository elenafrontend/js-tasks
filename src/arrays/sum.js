// https://learn.javascript.ru/task/array-input-sum
export function sumInput() {
  let isCorrectInput = true;
  const values = [];
  let sum = 0;

  do {
    const input = prompt('Введите число');
    if (input === null || input.trim() === '') {
      isCorrectInput = false;
    }
    values.push(Number(input));
  } while(isCorrectInput);

  for(let i = 0; i < values.length; i += 1) {
    sum += values[i];
  }
  return sum;
}

// https://learn.javascript.ru/task/maximal-subarray
export function getMaxSubSum(arr) {

  console.group(`Maximum subarray problem for ${arr}`)

  console.time('with O(n^2)')
  {
    let sum = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
      let currentIndexSum = arr[i];

      for (let j = i + 1; j < arr.length; j += 1) {
        if (currentIndexSum + arr[j] < 0) break;
        currentIndexSum += arr[j]
      }

      if (currentIndexSum > sum) {
        sum = currentIndexSum;
      }
    }
  }
  console.timeEnd('with O(n^2)')

  {
    console.time('with O(n)')
    let maxSum = arr[0];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i += 1) {
      currentSum += arr[i];
      maxSum = Math.max(maxSum, currentSum);

      // instead can be currentSum = Math.max(arr[i] + currentSum, 0)
      // as for me, it's more readable
      if(currentSum < 0) {
        currentSum = 0
      }
    }
    console.timeEnd('with O(n)')

    return maxSum;
  }
}