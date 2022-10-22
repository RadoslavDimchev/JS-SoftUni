window.addEventListener('load', solve);

function solve() {
  const fName = document.getElementById('first-name');
  const lName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const title = document.getElementById('story-title');
  const story = document.getElementById('story');
  const genre = document.getElementById('genre');

  const formBtn = document.getElementById('form-btn');
  formBtn.addEventListener('click', form);

  const previewList = document.getElementById('preview-list');

  function form(event) {
    event.preventDefault();

    const fNameValue = fName.value;
    const lNameValue = lName.value;
    const ageValue = age.value;
    const titleValue = title.value;
    const storyValue = story.value;
    const genreValue = genre.value;

    if (!fNameValue || !lNameValue || !ageValue || !titleValue || !storyValue) {
      return;
    }

    const li = genElement('li', previewList, null, 'story-info');

    const article = genElement('article', li);
    genElement('h4', article, `Name: ${fNameValue} ${lNameValue}`);
    genElement('p', article, `Age: ${ageValue}`);
    genElement('p', article, `Title: ${titleValue}`);
    genElement('p', article, `Genre: ${genreValue}`);
    genElement('p', article, `${storyValue}`);

    const saveBtn = genElement('button', li, 'Save Story', 'save-btn');
    const editBtn = genElement('button', li, 'Edit Story', 'edit-btn');
    const deleteBtn = genElement('button', li, 'Delete Story', 'delete-btn');

    saveBtn.addEventListener('click', () => {
      const mainDiv =  document.getElementById('main');
      mainDiv.innerHTML = '';
      genElement('h1', mainDiv, 'Your scary story is saved!');
    });

    editBtn.addEventListener('click', () => {
      li.remove();
      formBtn.removeAttribute('disabled');
      fName.value = fNameValue;
      lName.value = lNameValue;
      age.value = ageValue;
      title.value = titleValue;
      story.value = storyValue;
    });

    deleteBtn.addEventListener('click', () => {
      li.remove();
      formBtn.removeAttribute('disabled');
    });

    formBtn.setAttribute('disabled', true);
    fName.value = '';
    lName.value = '';
    age.value = '';
    title.value = '';
    story.value = '';
  }

  function genElement(tag, parent, content, className) {
    const element = document.createElement(tag);
    if (content) {
      element.textContent = content;
    }
    if (className) {
      element.className = className;
    }
    parent.appendChild(element);
    return element;
  }
}