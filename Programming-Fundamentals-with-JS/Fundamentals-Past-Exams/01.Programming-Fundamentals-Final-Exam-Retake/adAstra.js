function adAstra(input = []) {
  const text = input.join('');
  const DAY_KCAL = 2000;
  const pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  const foods = [];
  let totalCalories = 0;
  let valid;

  while ((valid = pattern.exec(text)) !== null) {
    const name = valid.groups.name;
    const expirationDate = valid.groups.date;
    const calories = +valid.groups.calories;

    totalCalories += calories;

    foods.push({ name, expirationDate, calories });
  }

  const days = Math.trunc(totalCalories / DAY_KCAL);

  console.log(`You have food to last you for: ${days} days!`);

  for (const data of foods) {
    console.log(`Item: ${data.name}, Best before: ${data.expirationDate}, Nutrition: ${data.calories}`);
  }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);