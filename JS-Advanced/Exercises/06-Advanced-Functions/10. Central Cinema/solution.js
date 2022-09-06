function solve() {
  const [onScreenBtn, clearBtn] = document.querySelectorAll('button');
  const [name, hall, price] = document.querySelectorAll('input');
  const [moviesList, archiveList] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);

  onScreenBtn.addEventListener('click', onScreen);
  clearBtn.addEventListener('click', clear);

  function onScreen(ev) {
    ev.preventDefault();
    const numberPrice = Number(price.value)

    if (name.value && hall.value && numberPrice) {
      const li = document.createElement('li');
      moviesList.appendChild(li);

      li.appendChild(createElement('span', name.value));
      const hallElement = createElement('strong', `Hall: ${hall.value}`);
      li.appendChild(hallElement);

      const div = li.appendChild(createElement('div'));
      div.appendChild(createElement('strong', numberPrice.toFixed(2)));

      const input = createElement('input');
      input.placeholder = 'Tickets Sold';
      div.appendChild(input);

      const archiveBtn = div.appendChild(createElement('button', 'Archive'));
      li.appendChild(div);
      archiveBtn.addEventListener('click', archive);

      [name.value, hall.value, price.value] = ['', '', ''];

      function archive() {
        const soldTickets = Number(input.value);

        if (input.value === "" || Number.isNaN(soldTickets)) return;

        archiveList.appendChild(li);
        hallElement.remove();
        div.remove();

        li.appendChild(createElement('strong', `Total amount: ${(numberPrice * soldTickets).toFixed(2)}`));
        const deleteBtn = createElement('button', 'Delete');
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => li.remove());
      }
    }
  }

  function createElement(type, content) {
    const element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  }

  function clear() {
    Array.from(archiveList.children).forEach(li => li.remove());
  }
}