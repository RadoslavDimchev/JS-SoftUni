import { get } from './api.js';
import { showCatalog } from './catalog.js';
import { showDetails } from './details.js';
import { e } from './dom.js';
import { setActiveNav } from './util.js';

const section = document.getElementById('home');
const recipesContainer = document.querySelector('.recent-recipes');

export async function home(ctx) {
  setActiveNav();
  ctx.render(section);
  section.querySelector('footer a').addEventListener('click', () => showCatalog(ctx));

  const recipes = await get('/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3');
  recipesContainer.replaceChildren(...recipes.map(createRecipeCard));
}

function createRecipeCard(recipe) {
  const result = e('article', { className: 'recent', onClick: () => showDetails(recipe._id) },
    e('div', { className: 'recent-preview' }, e('img', { src: recipe.img })),
    e('div', { className: 'recent-title' }, recipe.name)
  );
  return result;
}