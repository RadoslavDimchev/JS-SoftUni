import { showTheme } from './theme.js';


const container = document.querySelector('.container');
const main = document.querySelector('main');

const topics = document.querySelector('.topic-container');
const form = document.querySelector('.new-topic-border form');
const postButton = document.querySelector('.public');

document.querySelector('.cancel').addEventListener('click', (ev) => {
    ev.preventDefault();
    form.reset();
});
postButton.addEventListener('click', onPost);

export async function showHome() {
    container.replaceChildren(main);

    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        const data = await res.json();

        const result = Object.values(data).map(createPostPreview);
        topics.replaceChildren(...result);
    } catch (error) {
        alert(error.message);
    }
}

function createPostPreview(post) {
    const topic = document.createElement('div');
    topic.className = 'topic-name-wrapper';
    topic.id = post._id;

    topic.innerHTML = `
<div class="topic-name">
    <a href="#" class="normal">
        <h2>${post.title}</h2>
    </a>
    <div class="columns">
        <div>
            <p>Date: <time>${post.time}</time></p>
            <div class="nick-name">
                <p>Username: <span>${post.username}</span></p>
            </div>
        </div>
    </div>
</div>`;

    topic.addEventListener('click', (ev) => showTheme(ev.currentTarget.id));
    return topic;
}

async function onPost(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('topicName');
    const username = formData.get('username');
    const content = formData.get('postText');

    try {
        if (!title || !username || !content) {
            throw new Error('All fields are required!');
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                username,
                content,
                time: new Date()
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        form.reset();
        showHome();
    } catch (error) {
        alert(error.message);
    }
}