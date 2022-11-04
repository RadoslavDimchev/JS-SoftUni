document.getElementById('form').addEventListener('submit', submitStudent);
const url = 'http://localhost:3030/jsonstore/collections/students';
loadStudents();

async function loadStudents() {
  const tbody = document.querySelector('tbody');
  tbody.replaceChildren();

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Students can\'t load');
    }

    const data = await response.json();

    Object
      .values(data)
      .forEach(s => {
        const student = createElement('tr',
          createElement('td', s.firstName),
          createElement('td', s.lastName),
          createElement('td', s.facultyNumber),
          createElement('td', s.grade),
        );
        tbody.appendChild(student);
      });
  } catch (error) {
    alert(error.message);
  }
}

async function submitStudent(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    facultyNumber: formData.get('facultyNumber'),
    grade: formData.get('grade'),
  };

  if (!data.firstName || !data.lastName || !data.facultyNumber || !data.grade) {
    return;
  }

  try {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Error with submit student');
    }

    loadStudents();
  } catch (error) {
    alert(error.message);
  }
}

function createElement(type, ...content) {
  const element = document.createElement(type);
  content.forEach(c => {
    if (typeof c === 'string' || typeof c === 'number') {
      c = document.createTextNode(c);
    }
    element.appendChild(c);
  });
  return element;
}