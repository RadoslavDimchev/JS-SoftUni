const [registerForm, loginForm] = document.querySelectorAll('form');
registerForm.addEventListener('submit', OnRegister);
loginForm.addEventListener('submit', onLogin);

async function OnRegister(event) {
  event.preventDefault();

  const formData = new FormData(registerForm);

  const email = formData.get('email');
  const password = formData.get('password');
  const repass = formData.get('rePass');

  try {
    if (!email || !password || !repass) {
      throw new Error('All fields are required!');
    }
    if (password !== repass) {
      throw new Error('Passwords dont\'t match!');
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
      id: data._id,
      accessToken: data.accessToken,
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));

    window.location = './homeLogged.html';
  } catch (error) {
    alert(error.message);
  }
}

async function onLogin(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const email = formData.get('email');
  const password = formData.get('password');

  try {
    if (!email || !password) {
      throw new Error('All fields are required!');
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
      id: data._id,
      accessToken: data.accessToken,
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));

    window.location = './homeLogged.html';
  } catch (error) {
    alert(error.message);
  }
}