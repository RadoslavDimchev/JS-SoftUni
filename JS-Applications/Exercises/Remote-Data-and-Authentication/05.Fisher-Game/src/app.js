let userData = null;
const url = 'http://localhost:3030/data/catches';

window.addEventListener('DOMContentLoaded', async () => {
  userData = JSON.parse(sessionStorage.getItem('userdata'));
  const catches = document.getElementById('catches');
  catches.innerHTML = '';

  if (userData !== null) {
    document.getElementById('guest').style.display = 'none';
    document.querySelector('.add').disabled = false;
    document.querySelector('nav p span').textContent = userData.email;
    loadCatches();
  } else {
    document.getElementById('user').style.display = 'none';
    document.querySelector('nav p span').textContent = 'guest';
  }

  document.querySelector('.load').addEventListener('click', loadCatches);
  document.getElementById('logout').addEventListener('click', logout);
  document.getElementById('addForm').addEventListener('submit', addCatch);
  catches.addEventListener('click', eventHandler);
});

async function loadCatches() {
  const response = await fetch(url);
  const data = await response.json();

  document
    .getElementById('catches')
    .replaceChildren(...data.map(createCatch));
}

async function logout() {
  await fetch('http://localhost:3030/users/logout', {
    headers: {
      'X-Authorization': userData.accessToken
    },
  });
  sessionStorage.clear();
  window.location = './index.html';
}

async function addCatch(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  if (Array.from(formData.values()).some(val => val == '')) {
    alert('Fill all the fields');
  }

  try {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'X-authorization': userData.accessToken,
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const newCatch = await response.json();
    document.getElementById('catches').appendChild(createCatch(newCatch));

    Object
      .values(event.target)
      .filter(el => el.nodeName == 'INPUT')
      .forEach(el => (el.value = ''));
  } catch (error) {
    alert(error.message);
  }
}

async function deleteCatch(event) {
  const catchId = event.target.parentNode.dataset.id;
  event.target.parentNode.remove();

  await fetch(`${url}/${catchId}`, {
    method: 'delete',
    headers: {
      'X-authorization': userData.accessToken,
      'content-type': 'application/json',
    },
  });
}

async function updateCatch(event) {
  const catchId = event.target.parentNode.dataset.id;

  const data = Object.fromEntries(
    Array.from(event.target.parentNode.children)
      .filter(el => el.nodeName == 'INPUT')
      .map(el => [el.className, el.value])
  );

  const response = await fetch(`${url}/${catchId}`, {
    method: 'put',
    headers: {
      'X-authorization': userData.accessToken,
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function eventHandler(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.target.className == 'update' ? updateCatch(event) : deleteCatch(event);
}

function createCatch(data) {
  const div = e('div', { className: 'catch' },
    e('label', {}, 'Angler'),
    e('input', { type: 'text', className: 'angler', value: data.angler }),
    e('label', {}, 'Weight'),
    e('input', { type: 'text', className: 'weight', value: data.weight }),
    e('label', {}, 'Species'),
    e('input', { type: 'text', className: 'species', value: data.species }),
    e('label', {}, 'Location'),
    e('input', { type: 'text', className: 'location', value: data.location }),
    e('label', {}, 'Bait'),
    e('input', { type: 'text', className: 'bait', value: data.bait }),
    e('label', {}, 'Capture Time'),
    e('input', { type: 'number', className: 'captureTime', value: data.captureTime }),
    e('button', { className: 'update', id: data._id }, 'Update'),
    e('button', { className: 'delete', id: data._id }, 'Delete'),
  );

  div.classList.add('catch');
  div.dataset.id = data._id;

  const isOwner = userData && data._ownerId === userData.id;
  if (!isOwner) {
    div.querySelector('.angler').setAttribute('disabled', true);
    div.querySelector('.weight').setAttribute('disabled', true);
    div.querySelector('.species').setAttribute('disabled', true);
    div.querySelector('.location').setAttribute('disabled', true);
    div.querySelector('.bait').setAttribute('disabled', true);
    div.querySelector('.update').setAttribute('disabled', true);
    div.querySelector('.delete').setAttribute('disabled', true);
  }
  return div;
}

function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == 'on') {
      result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attr] = value;
    }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach(e => {
    if (typeof e == 'string' || typeof e == 'number') {
      const node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}