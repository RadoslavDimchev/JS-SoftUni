import { createCommentsHeader, createCommentPost, createTopicTitle, createCommentsBody } from './templates.js';


const container = document.querySelector('.container');
const section = document.querySelector('.theme-content');
const theme = document.querySelector('.theme-name-wrapper');
const comments = document.querySelector('.comment');
const form = document.querySelector('.answer-comment form');
const postButton = document.querySelector('.answer-comment button');

postButton.addEventListener('click', onPostButtonClick);

section.remove();
let themeId;

async function showTheme(id) {
    themeId = id;
    container.replaceChildren(section);

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
    const data = await response.json();

    let result = createTopicTitle(data);
    theme.replaceChildren(result);

    const header = createCommentsHeader(data);
    comments.replaceChildren(header);

    const body = createCommentsBody();
    comments.appendChild(body);

    loadComments();
}

async function loadComments() {
    const userComments = document.querySelector('.topic-name-wrapper');

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
        const data = await response.json();

        const result = Object.values(data)
            .filter(x => x.postId == themeId)
            .map(createCommentPost);

        userComments.replaceChildren(...result);
    } catch (error) {
        alert(error.message);
    }
}

async function onPostButtonClick(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {
        text: formData.get('postText'),
        username: formData.get('username'),
        postId: themeId,
        time: new Date(),
    };

    try {
        if (data.text == '' || data.username == '') {
            throw new Error('All fields are required!');
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        form.reset();
        loadComments();
    } catch (err) {
        console.error(err.message);
    }
}

export { showTheme };