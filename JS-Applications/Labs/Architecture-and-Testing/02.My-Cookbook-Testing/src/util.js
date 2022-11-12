export function createSubmitHandler(form, callback) {
  form.addEventListener('submit', onSubmit);

  function onSubmit(event) {
      event.preventDefault();
      const formData = new FormData(form);
      callback(Object.fromEntries([...formData.entries()]));
  }
}

export function setUserNav() {
  if (sessionStorage.getItem('authToken') != null) {
      document.getElementById('user').style.display = 'inline-block';
      document.getElementById('guest').style.display = 'none';
  } else {
      document.getElementById('user').style.display = 'none';
      document.getElementById('guest').style.display = 'inline-block';
  }
}

export async function getRecipeById(id) {
  const response = await fetch('http://localhost:3030/data/recipes/' + id);
  return await response.json();
}

export function setActiveNav(targetId) {
  [...document.querySelector('nav').querySelectorAll('a')]
      .forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
}