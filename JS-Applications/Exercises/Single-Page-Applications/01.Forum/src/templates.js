function createTopicTitle(record) {
	const { title, username, content, time, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'theme-title';

	wrap.innerHTML = `<div class="theme-name-wrapper">
	<div class="theme-name">
		<h2>${title}</h2>

	</div>

</div>`;

	return wrap;
}

function createCommentsHeader(record) {
	const { title, username, content, time, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'header';

	wrap.innerHTML = `<img src="./static/profile.png" alt="avatar">
	<p><span>${username}</span> posted on <time>${time}</time></p>

	<p class="post-content">${content}</p>`;

	return wrap;
}

function createCommentsBody() {
	const wrap = document.createElement('div');
	wrap.className = 'user-comment';

	wrap.innerHTML = `<div class="topic-name-wrapper">
	</div>`;

	return wrap;
}

function createCommentPost(record) {
	const { text, username, postId, time, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'topic-name';

	wrap.innerHTML = `<p><strong>${username}</strong> commented on <time>${time.toLocaleString()}</time></p>
	<div class="post-content">
		<p>${text}</p>
	</div>`;

	return wrap;
}

export { createTopicTitle, createCommentsHeader, createCommentsBody, createCommentPost };