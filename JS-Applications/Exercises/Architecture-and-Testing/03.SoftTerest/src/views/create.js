import { createIdea } from '../api/data.js';


const section = document.getElementById('createPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx;

export function showCreate(inCtx) {
  ctx = inCtx;
  ctx.showSection(section);
}

async function onSubmit(ev) {
  ev.preventDefault();

  const formData = new FormData(form);

  const title = formData.get('title');
  const description = formData.get('description');
  const img = formData.get('imageURL');

  try {
    if (title.length < 6) {
      throw new Error('Title should be at least 6 characters long!');
    }
    if (description.length < 10) {
      throw new Error('Description should be at least 10 characters lo!');
    }
    if (img.length < 5) {
      throw new Error('Image should be at least 5 characters lon!');
    }

    await createIdea({ title, description, img });
    form.reset();
    ctx.goTo('/catalog');
  } catch (error) {
    alert(error.message);
  }
}