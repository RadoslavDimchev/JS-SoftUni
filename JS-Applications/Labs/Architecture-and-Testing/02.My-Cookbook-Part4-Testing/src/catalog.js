import { e } from './dom.js';
import { showDetails } from './details.js';
import { get } from './api.js';
import { setActiveNav } from './util.js';


let ctx;
const section = document.getElementById('catalog');

export async function showCatalog(inCtx, page = 1) {
    ctx = inCtx;
    ctx.render(section);
    setActiveNav('catalogLink');

    const recipes = await get('/data/recipes?select=' + encodeURIComponent('_id,name,img'));
    const cards = recipes.map(createRecipePreview);
    const total = Math.ceil(cards.length / 5);

    const fragment = document.createDocumentFragment();

    if (page <= total) {
        fragment.appendChild(createPager(page, total, true));
        const currentCards = cards.slice((page - 1) * 5);
        for (let i = 0; i < 5; i++) {
            const card = currentCards[i];
            if (!card) { break; }
            fragment.appendChild(card);
        }
        fragment.appendChild(createPager(page, total));
    }

    section.innerHTML = '';
    section.appendChild(fragment);
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: () => showDetails(recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
}

function createPager(page, pages, header) {
    const type = header ? 'header' : 'footer';
    const result = e(type, { className: 'section-title' }, `Page ${page} of ${pages}`);
    if (page > 1) {
        result.appendChild(e('a', { style: 'margin: 5px;', href: '/catalog', className: 'pager', onClick: (e) => { e.preventDefault(); showCatalog(ctx, page - 1); } }, '< Prev'));
    }
    if (page < pages) {
        result.appendChild(e('a', { style: 'margin: 5px;', href: '/catalog', className: 'pager', onClick: (e) => { e.preventDefault(); showCatalog(ctx, page + 1); } }, 'Next >'));
    }
    return result;
}