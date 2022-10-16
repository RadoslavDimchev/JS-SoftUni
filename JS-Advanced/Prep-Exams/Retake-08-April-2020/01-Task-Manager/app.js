function solve() {
    const [_, open, inProgress, complete] = document.querySelectorAll('section div:nth-child(2)');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        const taskValue = task.value;
        const descriptionValue = description.value;
        const dateValue = date.value;

        if (!taskValue || !descriptionValue || !dateValue) {
            return;
        }

        const article = genElement('article', open);
        genElement('h3', article, taskValue);
        genElement('p', article, `Description: ${descriptionValue}`);
        genElement('p', article, `Due Date: ${dateValue}`);
        const div = genElement('div', article, null, 'flex');
        const startBtn = genElement('button', div, 'Start', 'green');
        const deleteBtn = genElement('button', div, 'Delete', 'red');

        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish';
        finishBtn.className = 'orange';

        startBtn.addEventListener('click', () => {
            inProgress.appendChild(article);
            startBtn.remove();
            div.appendChild(finishBtn);
        });

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });

        finishBtn.addEventListener('click', () => {
            complete.appendChild(article);
            div.remove();
        });

        task.value = '';
        description.value = '';
        date.value = '';
    }

    function genElement(elementToCreate, parent, textContent, className) {
        const element = document.createElement(elementToCreate);
        parent.appendChild(element);
        if (textContent) {
            element.textContent = textContent;
        }
        if (className) {
            element.className = className;
        }
        return element;
    }
}