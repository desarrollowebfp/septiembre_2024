const numbers = [4, 5, 4, 3, 6, 8, 5];

function average(numberList) {
  let total = 0;
  for (const number of numberList) {
    total += number;
  }
  const result = total / numberList.length;
  console.log(result);
}

average(numbers);
