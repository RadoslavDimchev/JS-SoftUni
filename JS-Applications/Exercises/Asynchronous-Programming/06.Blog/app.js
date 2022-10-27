const baseUrl = 'http://localhost:3030/jsonstore/blog';
const select = document.getElementById('posts');
const btnViewPosts = document.getElementById('btnViewPost');
const title = document.getElementById('post-title');
const body = document.getElementById('post-body');
const postComments = document.getElementById('post-comments');

const loadPostsBtn = document.getElementById('btnLoadPosts');
loadPostsBtn.addEventListener('click', loadPosts);

async function loadPosts() {
    try {
        const response = await fetch(baseUrl + '/posts');
        const data = await response.json();

        select.innerHTML = '';
        for (const key in data) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data[key].title;
            select.appendChild(option);
        }

        btnViewPosts.addEventListener('click', () => viewPosts(data));
    } catch (error) {
        console.log(error.message);
    }
}

async function viewPosts(dataSelect) {
    try {
        const response = await fetch(baseUrl + '/comments');
        const data = await response.json();

        const comments = Object
            .values(data)
            .filter(obj => select.value === obj.postId);

        const selectedOption = [...select.options]
            .find(o => o.value === select.value);

        title.textContent = selectedOption.textContent;
        body.textContent = dataSelect[select.value].body;

        postComments.innerHTML = '';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            postComments.appendChild(li);
        });
    } catch (error) {
        console.log(error.message);
    }
}