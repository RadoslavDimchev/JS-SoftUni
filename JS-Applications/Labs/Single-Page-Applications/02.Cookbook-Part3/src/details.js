import { setupEdit, setupDelete } from './edit.js';
import { e, setupNav } from './util.js';


const section = document.getElementById('details');

export async function setupDetails(id) {
  setupNav();
  document.querySelector('main').replaceChildren(section);
  const recipe = await getRecipeById(id);
  const toggledCard = createRecipeCard(recipe);
  section.replaceChildren(toggledCard);
}

export async function getRecipeById(id) {
  const response = await fetch('http://localhost:3030/data/recipes/' + id);
  const recipe = await response.json();

  return recipe;
}

function addCreatorTools() {
  return e('div', { className: 'controls' },
    e('button', { onClick: setupEdit }, '\u270E Edit'),
    e('button', { onClick: setupDelete }, '\u2716 Delete')
  );
}

function createRecipeCard(recipe) {
  const result = e('article', {},
    e('h2', {}, recipe.name),
    e('div', { className: 'band' },
      e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
      e('div', { className: 'ingredients' },
        e('h3', {}, 'Ingredients:'),
        e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
      )
    ),
    e('div', { className: 'description' },
      e('h3', {}, 'Preparation:'),
      recipe.steps.map(s => e('p', {}, s))
    ),
  );

  result.dataset.id = recipe._id;

  if (recipe._ownerId === sessionStorage.getItem('id')) {
    result.appendChild(addCreatorTools());
  }

  return result;
}