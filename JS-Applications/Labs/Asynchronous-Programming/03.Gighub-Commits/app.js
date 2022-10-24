async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const list = document.getElementById('commits');

    try {
        const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

        if (!res.ok) {
            throw new Error(`${res.status} (${res.statusText})`);
        }

        const commits = await res.json();

        list.innerHTML = '';
        for (const { commit } of commits) {
            list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;
        }
    } catch (error) {
        list.innerHTML = `<li>Error: ${error.message}</li>`;
    }
}

// With then catch

// function loadCommits() {
//     const username = document.getElementById('username').value;
//     const repo = document.getElementById('repo').value;
//     const list = document.getElementById('commits');

//     fetch(`https://api.github.com/repos/${username}/${repo}/commits `)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`${res.status} (${res.statusText})`);
//             }
//             return res.json();
//         })
//         .then(commits => {
//             list.innerHTML = '';
//             for (const { commit } of commits) {
//                 list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;
//             }
//         })
//         .catch((error) => list.innerHTML = `<li>Error: ${error.message}</li>`);
// }