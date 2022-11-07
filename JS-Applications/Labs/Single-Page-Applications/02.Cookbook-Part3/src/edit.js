import { setupCatalog } from './catalog.js';
import { getRecipeById } from './details.js';
import { e, checkUserNav, setupNav } from './util.js';


const section = document.getElementById('edit');

export async function setupEdit(event) {
  setupNav();
  const article = event.target.parentNode.parentNode;
  const id = article.dataset.id;

  document.querySelector('main').replaceChildren(section);

  const recipe = await getRecipeById(id);

  const form = section.querySelector('form');
  form.querySelector('[name="name"]').value = recipe.name;
  form.querySelector('[name="img"]').value = recipe.img;
  form.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
  form.querySelector('[name="steps"]').value = recipe.steps.join('\n');


  form.addEventListener('submit', (ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
  }));

  async function onSubmit(data) {
    const body = JSON.stringify({
      name: data.name,
      img: data.img,
      ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
      steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    });

    const token = sessionStorage.getItem('authToken');
    if (token == null) {
      setupCatalog();
      checkUserNav();
    }

    try {
      const response = await fetch('http://localhost:3030/data/recipes/' + id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': token
        },
        body
      });

      if (response.ok) {
        setupCatalog();
      } else {
        throw new Error(await response.json());
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}

export function setupDelete(event) {
  const recipe = event.target.parentNode.parentNode;
  recipe.remove();

  fetch('http://localhost:3030/data/recipes/' + recipe.dataset.id, {
    method: 'delete',
    headers: {
      'X-Authorization': sessionStorage.getItem('authToken')
    }
  });

  document.querySelector('main').appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
}