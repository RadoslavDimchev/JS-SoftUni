function calorieObject(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const food = arr[i];
    const calories = Number(arr[++i]);

    obj[food] = calories;
  }

  console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);