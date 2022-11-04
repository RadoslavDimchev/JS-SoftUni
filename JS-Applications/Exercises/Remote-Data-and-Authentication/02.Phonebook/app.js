const url = 'http://localhost:3030/jsonstore/phonebook';
const phonebook = document.getElementById('phonebook');

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);
}

attachEvents();

async function getContacts() {
    try {
        phonebook.innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();
        loadContacts(data);
    } catch (error) {
        alert(error.message);
    }
}

async function createContact() {
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    if (!person.value || !phone.value) {
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: person.value,
                phone: phone.value,
            })
        });

        const data = await response.json();

        getContacts();

        person.value = '';
        phone.value = '';
    } catch (error) {
        alert(error.message);
    }
}

function loadContacts(data) {
    Object
        .values(data)
        .forEach(c => {
            const li = document.createElement('li');
            li.textContent = `${c.person}: ${c.phone}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteContact(li, c._id));

            li.appendChild(deleteBtn);
            phonebook.appendChild(li);
        });
}

async function deleteContact(li, key) {
    const response = await fetch(`${url}/${key}`, {
        method: 'delete'
    });

    const data = await response.json();

    li.remove();
}