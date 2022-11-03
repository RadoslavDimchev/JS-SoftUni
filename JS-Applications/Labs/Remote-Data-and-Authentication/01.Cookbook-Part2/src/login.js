document.querySelector('form').addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  };

  try {
    if (!data.email) {
      throw new Error('Email is required!');
    }
    if (!data.password) {
      throw new Error('Password is required!');
    }

    const response = await fetch('http://localhost:3030/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const responseData = await response.json();

    sessionStorage.setItem('accessToken', responseData.accessToken);

    window.location = '/';
  } catch (error) {
    alert(error.message);
  }
}