window.addEventListener('load', solve);

function solve() {
  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn')
    .addEventListener('click', () => publishedList.innerHTML = '');

  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');

  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const content = document.getElementById('post-content');

  function publish(e) {
    e.preventDefault();

    const titleValue = title.value;
    const categoryValue = category.value;
    const contentValue = content.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    const li = createElement('li', reviewList, 'rpost');
    const article = createElement('article', li);
    createElement('h4', article, null, titleValue);
    createElement('p', article, null, `Category: ${categoryValue}`);
    createElement('p', article, null, `Content: ${contentValue}`);

    const editBtn = createElement('button', li, 'action-btn edit', 'Edit');
    editBtn.addEventListener('click', edit);

    const approveBtn = createElement('button', li, 'action-btn approve', 'Approve');
    approveBtn.addEventListener('click', approve);

    function createElement(elementToCreate, parent, className, textContent) {
      const element = document.createElement(elementToCreate);
      parent.appendChild(element);
      if (className) {
        element.className = className;
      }
      if (textContent) {
        element.textContent = textContent;
      }
      return element;
    }

    title.value = '';
    category.value = '';
    content.value = '';

    function edit() {
      li.remove();

      title.value = titleValue;
      category.value = categoryValue;
      content.value = contentValue;
    }

    function approve() {
      publishedList.appendChild(li);
      editBtn.remove();
      approveBtn.remove();
    }
  }
}