if (sessionStorage.getItem('accessToken')) {
  document.getElementById('guest').style.display = 'none';
} else {
  document.getElementById('user').style.display = 'none';
}

document.querySelector('form button').addEventListener('click', async event => {
  event.preventDefault();

  const formData = new FormData(document.querySelector('form'));

  const email = formData.get('email');
  const password = formData.get('password');
  const repass = formData.get('rePass');

  try {
    if (password !== repass) {
      throw new Error('Passwords don\'t match!');
    }
    if (!email || !password || !repass) {
      throw new Error('All fileds are required!');
    }

    const response = await fetch('http://localhost:3030/users/register', {
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