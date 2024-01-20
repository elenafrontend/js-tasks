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