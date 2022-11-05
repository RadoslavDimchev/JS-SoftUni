const url = 'http://localhost:3030/jsonstore/collections/books';
const tbody = document.querySelector('tbody');
const submitBtn = document.querySelector('form button');
const h3 = document.querySelector('form h3');
let id;

document.getElementById('loadBooks').addEventListener('click', loadAllBooks);
document.querySelector('form').addEventListener('submit', onSubmit);
tbody.addEventListener('click', updateOrDeleteBook);

async function loadAllBooks() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error while loads all books');
    }

    const data = await response.json();

    tbody.innerHTML = '';
    Object.entries(data).forEach(createBookRecord);
  } catch (error) {
    alert(error.message);
  }
}

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const title = formData.get('title');
  const author = formData.get('author');
  const formBtn = document.querySelector('form button');

  if (!title || !author) {
    return;
  }

  try {
    let response;

    formBtn.textContent === 'Submit'
      ? response = await getResponse('post', url, { title, author })
      : response = await getResponse('put', `${url}/${id}`, { title, author });

    if (!response.ok) {
      throw new Error('Error in submit');
    }

    loadAllBooks();
    h3.textContent = 'FORM';
    submitBtn.textContent = 'Submit';
  } catch (error) {
    alert(error.message);
  }
}

function updateOrDeleteBook(event) {
  id = event.target.parentNode.id;

  if (event.target.textContent === 'Edit') {
    h3.textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';

    document.querySelector('[name="title"]').value =
      event.target.parentNode.parentNode.children[0].textContent;

    document.querySelector('[name="author"]').value =
      event.target.parentNode.parentNode.children[1].textContent;
  } else if (event.target.textContent === 'Delete') {
    fetch(`${url}/${id}`, {
      method: 'delete'
    });
    event.target.parentNode.parentNode.remove();
  }
}

async function getResponse(methodType, url, data) {
  const response = await fetch(url, {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response;
}

function createBookRecord([key, { title, author }]) {
  const tr = createElement('tr', tbody);

  createElement('td', tr, title);
  createElement('td', tr, author);

  const td = createElement('td', tr);
  td.id = key;
  createElement('button', td, 'Edit');
  createElement('button', td, 'Delete');
}

function createElement(tag, parent, content) {
  const element = document.createElement(tag);
  if (content) {
    element.textContent = content;
  }
  parent.appendChild(element);
  return element;
}