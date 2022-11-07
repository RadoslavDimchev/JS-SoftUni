export function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
      if (attr.substring(0, 2) == 'on') {
          result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
      } else {
          result[attr] = value;
      }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach(e => {
      if (typeof e == 'string' || typeof e == 'number') {
          const node = document.createTextNode(e);
          result.appendChild(node);
      } else {
          result.appendChild(e);
      }
  });

  return result;
}

export function checkUserNav() {
    if (sessionStorage.getItem('authToken') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
    }
}

export function setupNav(targetId) {
    [...document.querySelectorAll('nav a')].forEach(a => a.id === targetId ? a.classList.add('active') : a.classList.remove('active'));
}