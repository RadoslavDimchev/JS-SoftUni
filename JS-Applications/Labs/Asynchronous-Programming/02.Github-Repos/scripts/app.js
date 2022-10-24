// async / await

async function loadRepos() {
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');

	try {
		const response = await fetch(`https://api.github.com/users/${username}/repos`);

		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const repos = await response.json();

		list.innerHTML = '';

		for (const repo of repos) {
			list.innerHTML += `<li>
					<a href="${repo.html_url}" target="_blank">
							${repo.full_name}
					</a>
					</li>`;
		}
	} catch (error) {
		list.innerHTML = error.message;
	}
}

// then catch

// function loadRepos() {
// 	const inputUsername = document.getElementById('username').value;
// 	const list = document.getElementById('repos');

// 	fetch(`https://api.github.com/users/${inputUsername}/repos`)
// 		.then(handleResponse)
// 		.then(displayRepos)
// 		.catch(hadleError);

// 	function handleResponse(response) {
// 		if (!response.ok) {
// 			throw new Error(`${response.status}: ${response.statusText}`);
// 		}
// 		return response.json();
// 	}

// 	function displayRepos(repos) {
// 		for (const repo of repos) {
// 			list.innerHTML += `<li>
// 				<a href="${repo.html_url}" target="_blank">
// 						${repo.full_name}
// 				</a>
// 				</li>`;
// 		}
// 	}

// 	function hadleError(error) {
// 		list.innerHTML = error.message;
// 	}
// }