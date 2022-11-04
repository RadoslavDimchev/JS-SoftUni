const messages = document.getElementById('messages');

function attachEvents() {
    document.getElementById('submit').addEventListener('click', sent);
    document.getElementById('refresh').addEventListener('click', refresh);
}

attachEvents();

async function sent() {
    const author = document.querySelector('[name="author"]');
    const content = document.querySelector('[name="content"]');

    if (!author.value || !content.value) {
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author: author.value.trim(), content: content.value.trim() })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        messages.value += `\n${author.value}: ${content.value}`;

        author.value = '';
        content.value = '';
    } catch (error) {
        alert(error.message);
    }
}

async function refresh() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        messages.value = Object
            .values(data)
            .map(m => `${m.author}: ${m.content}`)
            .join('\n');
    } catch (error) {
        alert(error.message);
    }
}