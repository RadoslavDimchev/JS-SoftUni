export function initialize(links) {
  const nav = document.querySelector('nav');
  nav.addEventListener('click', onNavigate);

  const context = {
    showSection,
    goTo,
    updateNav
  };

  return context;

  function showSection(section) {
    document.querySelector('main').replaceChildren(section);
  }

  function onNavigate(ev) {
    let target = ev.target;
    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      ev.preventDefault();
      const url = new URL(target.href);
      goTo(url.pathname);
    }
  }

  function goTo(name, ...params) {
    const handler = links[name];
    if (typeof handler === 'function') {
      handler(context, ...params);
    }
  }

  function updateNav() {
    const user = sessionStorage.getItem('user');

    if (user) {
      nav.querySelectorAll('.user').forEach(e => e.style.display = 'block');
      nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
    } else {
      nav.querySelectorAll('.user').forEach(e => e.style.display = 'none');
      nav.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
    }
  }
}