function sumFirstLast(numbers) {
  const first = [...numbers].shift();
  const second = [...numbers].pop();

  const result = Number(first) + Number(second);
  return result;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
console.log(sumFirstLast(['10']));