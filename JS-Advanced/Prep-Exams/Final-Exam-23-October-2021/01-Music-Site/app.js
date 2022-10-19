window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    const hits = document.getElementsByClassName('all-hits-container')[0];
    const likes = document.querySelector('#total-likes div p');
    let likesCount = 0;
    const saved = document.getElementsByClassName('saved-container')[0];

    function add(event) {
        event.preventDefault();

        const genreValue = genre.value;
        const nameValue = name.value;
        const authorValue = author.value;
        const dateValue = date.value;

        if (!genreValue || !nameValue || !authorValue || !dateValue) {
            return;
        }

        const div = genElement('div', hits, null, 'hits-info');
        const img = genElement('img', div);
        img.src = './static/img/img.png';
        genElement('h2', div, `Genre: ${genreValue}`);
        genElement('h2', div, `Name: ${nameValue}`);
        genElement('h2', div, `Author: ${authorValue}`);
        genElement('h3', div, `Date: ${dateValue}`);
        const saveBtn = genElement('button', div, 'Save song', 'save-btn');
        const likeBtn = genElement('button', div, 'Like song', 'like-btn');
        const deleteBtn = genElement('button', div, 'Delete', 'delete-btn');

        saveBtn.addEventListener('click', () => {
            saved.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        });

        likeBtn.addEventListener('click', () => {
            likesCount++;
            likes.textContent = `Total Likes: ${likesCount}`;
            likeBtn.setAttribute('disabled', true);
        });

        deleteBtn.addEventListener('click', () => {
            div.remove();
        });

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
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