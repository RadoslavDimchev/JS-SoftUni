import { setupDetails } from './details.js';
import { e, setupNav } from './util.js';


const section = document.getElementById('catalog');

export async function setupCatalog() {
  setupNav('catalogBtn');

  const main = document.querySelector('main');
  main.replaceChildren(section);
  const recipes = await getRecipes();
  const cards = recipes.map(createRecipePreview);

  section.replaceChildren();
  const fragment = document.createDocumentFragment();
  cards.forEach(c => fragment.appendChild(c));
  section.appendChild(fragment);
}

async function getRecipes() {
  const response = await fetch('http://localhost:3030/data/recipes');
  const recipes = await response.json();

  return recipes;
}

function createRecipePreview(recipe) {
  const result = e('article', { className: 'preview', onClick: () => setupDetails(recipe._id) },
    e('div', { className: 'title' }, e('h2', {}, recipe.name)),
    e('div', { className: 'small' }, e('img', { src: recipe.img })),
  );

  return result;
}