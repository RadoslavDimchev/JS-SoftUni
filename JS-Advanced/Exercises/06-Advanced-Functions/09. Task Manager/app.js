function solve() {
  const [_, open, inProgress, complete] = document.querySelectorAll('section > div:nth-child(2)');
  const task = document.getElementById('task');
  const description = document.getElementById('description');
  const date = document.getElementById('date');
  document.getElementById('add').addEventListener('click', add);

  function add(ev) {
    ev.preventDefault();

    if (task.value && description.value && date.value) {
      const article = document.createElement('article');
      article.appendChild(createElement('h3', task.value));
      article.appendChild(createElement('p', `Description: ${description.value}`));
      article.appendChild(createElement('p', `Due Date: ${date.value}`));
      const div = createElement('div', '', 'flex')

      const startBtn = createElement('button', 'Start', 'green');
      const deleteBtn = createElement('button', 'Delete', 'red');
      const finishBtn = createElement('button', 'Finish', 'orange');

      div.appendChild(startBtn);
      div.appendChild(deleteBtn);

      article.appendChild(div);
      open.appendChild(article);

      [task.value, description.value, date.value] = ['', '', ''];

      startBtn.addEventListener('click', onStart);
      deleteBtn.addEventListener('click', onDelete);
      finishBtn.addEventListener('click', onFinish);

      function onStart() {
        inProgress.appendChild(article);
        startBtn.remove();
        div.appendChild(finishBtn);
      }

      function onDelete() {
        article.remove();
      }

      function onFinish() {
        complete.appendChild(article);
        div.remove();
      }
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}