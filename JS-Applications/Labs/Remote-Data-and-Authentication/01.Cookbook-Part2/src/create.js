const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    img: formData.get('img'),
    ingredients: formData.get('ingredients').trim().split('\n'),
    steps: formData.get('steps').trim().split('\n')
  };

  const token = sessionStorage.getItem('accessToken');
  if(!token) {
    alert('Please login!');
    window.location = '/login.html';
    return;
  }

  try {
    const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg', {
      method: 'post',
      headers: {
        'Content-Type': 'applitcation/json',
        'X-Authorization': token
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    window.location = '/';
  } catch (error) {
    alert(error.message);
  }
}