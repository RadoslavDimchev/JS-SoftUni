if (sessionStorage.getItem('accessToken')) {
  document.getElementById('guest').style.display = 'none';
  document.getElementById('user').style.display = 'inline-block';
} else {
  document.getElementById('user').style.display = 'none';
  document.getElementById('guest').style.display = 'inline-block';
}

document.querySelector('form button').addEventListener('click', async event => {
  event.preventDefault();

  const formData = new FormData(document.querySelector('form'));
  const email = formData.get('email');
  const password = formData.get('password');
  
  try {
    if (!email || !password) {
      throw new Error('All fileds are required!');
    }

    const response = await fetch('http://localhost:3030/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();

    const userData = {
      email: data.email,
      id: data._id,
      accessToken: data.accessToken,
    };
    sessionStorage.setItem('userdata', JSON.stringify(userData));

    window.location = './index.html';
  } catch (error) {
    alert(error.message);
  }
});