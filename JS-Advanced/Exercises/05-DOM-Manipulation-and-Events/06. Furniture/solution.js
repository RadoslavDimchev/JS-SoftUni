function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    const list = JSON.parse(document.querySelectorAll('textarea')[0].value);

    for (const furniture of list) {
      const row = document.createElement('tr');

      // img
      const imageData = document.createElement('td');
      const img = document.createElement('img');
      img.src = furniture.img;
      imageData.appendChild(img);
      row.appendChild(imageData);

      // name
      const nameData = imageData.cloneNode();
      const furnitureName = document.createElement('p');
      nameData.appendChild(furnitureName);
      row.appendChild(nameData);

      // price
      const priceData = nameData.cloneNode(true);
      row.appendChild(priceData);

      // decoration factor
      const decFactorData = nameData.cloneNode(true);
      row.appendChild(decFactorData);

      // set values to name, price and dec factor
      furnitureName.textContent = furniture.name;
      priceData.children[0].textContent = furniture.price;
      decFactorData.children[0].textContent = furniture.decFactor;

      // input
      const inputData = imageData.cloneNode();
      const input = document.createElement('input');
      input.type = 'checkbox';
      inputData.appendChild(input);
      row.appendChild(inputData);

      document.querySelector('tbody').appendChild(row);
    }
  }

  function buy() {
    const bought = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    const checkboxes = Array
      .from(document.querySelectorAll('tbody input'))
      .filter(ch => ch.checked);

    for (const checkbox of checkboxes) {
      const [name, price, decFactor] =
        checkbox.parentElement.parentElement.querySelectorAll('td p');

      bought.push(name.textContent);
      totalPrice += Number(price.textContent);
      avgDecFactor += Number(decFactor.textContent);
    }

    avgDecFactor /= bought.length;

    document.querySelectorAll('textarea')[1].value =
      `Bought furniture: ${bought.join(', ')}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${avgDecFactor}`;
  }
}