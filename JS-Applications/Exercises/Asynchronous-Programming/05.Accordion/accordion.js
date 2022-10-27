solution();

async function solution() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        if (!response.ok) {
            throw new Error();
        }
        const data = await response.json();

        data.forEach(article => {
            const accordion = createElement('div', document.getElementById('main'), '', 'accordion');

            const head = createElement('div', accordion, '', 'head');
            createElement('span', head, article.title, '');
            const button = createElement('button', head, 'More', 'button');
            button.id = article._id;
            button.addEventListener('click', toggle);

            const extra = createElement('div', accordion, '', 'extra');
            extra.style.display = 'none';
            createElement('p', extra);
        });
    } catch (error) {
        console.log(error.message);
    }
}

async function toggle(event) {
    try {
        const button = event.currentTarget;
        const extra = button.parentNode.nextSibling;
        const p = extra.querySelector('p');

        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + button.id);
        if (!response.ok) {
            throw new Error();
        }
        const data = await response.json();

        p.textContent = data.content;

        if (button.textContent === 'More') {
            button.textContent = 'Less';
            extra.style.display = 'block';
        } else {
            button.textContent = 'More';
            extra.style.display = 'none';
        }
    } catch (error) {
        console.log(error.message);
    }
}

function createElement(tag, parent, content, className) {
    const element = document.createElement(tag);
    if (content) { element.textContent = content; }
    if (className) { element.className = className; }
    parent.appendChild(element);
    return element;
}