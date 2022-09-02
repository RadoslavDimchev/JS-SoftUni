function create(words) {
  const content = document.getElementById('content');

  words.forEach(word => {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = word;
    p.style.display = 'none';

    div.appendChild(p);
    content.appendChild(div);
  });

  content.addEventListener('click', onClick);

  function onClick(e) {
    if (e.target.tagName === 'DIV') {
      e.target.children[0].style.display = '';
    }
  }
}

// second solution with event handler on each div

/* function create(words) {
  words.forEach(word => {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = word;
    p.style.display = 'none';

    div.appendChild(p);
    document.getElementById('content').appendChild(div);

    div.addEventListener('click', (e) => {
      e.target.children[0].style.display = '';
    });
  });
} */