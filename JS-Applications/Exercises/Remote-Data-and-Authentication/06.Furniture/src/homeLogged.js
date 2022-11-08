const logoutBtn = document.getElementById('logoutBtn');
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const buttons = [...document.querySelectorAll('button')];
const [boughtFurniture, totalPrice] = document.querySelectorAll('.orders span');

logoutBtn.addEventListener('click', onLogout);
form.addEventListener('submit', onCreate);
buttons[1].addEventListener('click', onBuy);
buttons[2].addEventListener('click', onAllOrders);

boughtFurniture.textContent = 'Nothing bought yet!';
totalPrice.textContent = '0 $';
getData();

async function getData() {
    tbody.innerHTML = '';
    const response = await fetch('http://localhost:3030/data/furniture');
    const data = await response.json();

    data.forEach(el => tbody.innerHTML += `
  <tr>
  <td>
      <img src="${el.img}">
  </td>
  <td>
      <p>${el.name}</p>
  </td>
  <td>
      <p>${el.price}</p>
  </td>
  <td>
      <p>${el.factor}</p>
  </td>
  <td>
      <input type="checkbox" />
  </td>
</tr>
`);
}

async function onLogout() {
    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': JSON.parse(sessionStorage.getItem('userData')).accessToken
        }
    });
    sessionStorage.removeItem('userData');
    window.location = './index.html';
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');
    const price = formData.get('price');
    const factor = formData.get('factor');
    const img = formData.get('img');

    try {
        if (!name || !price || !factor || !img) {
            throw new Error('All fields are required!');
        }

        const response = await fetch('http://localhost:3030/data/furniture', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(sessionStorage.getItem('userData')).accessToken
            },
            body: JSON.stringify({ name, price, factor, img })
        });

        if (!response.ok) {
            const error = await response.json();
            alert(error.message);
        }

        [...form.querySelectorAll('input')].forEach(i => i.value = '');

        getData();
    } catch (error) {
        alert(error.message);
    }
}

function onBuy() {
    [...tbody.querySelectorAll('input')]
        .filter(x => x.checked == true)
        .forEach(async (x) => {
            x.checked = false;
            let [img, name, price, factor] = x.parentElement.parentElement.children;

            img = img.firstElementChild.src;
            name = name.firstElementChild.textContent;
            price = price.firstElementChild.textContent;
            factor = factor.firstElementChild.textContent;

            const data = { name, price, factor, img };
            await fetch('http://localhost:3030/data/orders', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(sessionStorage.getItem('userData')).accessToken
                },
                body: JSON.stringify(data)
            });
        });
}

async function onAllOrders() {
    const userId = JSON.stringify(JSON.parse(sessionStorage.getItem('userData')).id);
    const response = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D${userId}`);
    const data = await response.json();
    data.shift();
    const purchases = data.map(x => x.name).join(', ');

    if (purchases !== '') {
        boughtFurniture.textContent = purchases;
        totalPrice.textContent = `${data.reduce((a, b) => a + Number(b.price), 0)} $`;
    }
}