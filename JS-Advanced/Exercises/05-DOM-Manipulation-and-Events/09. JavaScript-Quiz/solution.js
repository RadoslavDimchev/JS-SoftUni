function solve() {
  const answers = new Set(['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']);
  const result = document.querySelector('ul li h1');
  const maxAnswers = 6;
  let question = 0;

  Array.from(document.querySelectorAll('section'))
    .forEach(section => section.addEventListener('click', onClick));

  function onClick(e) {
    if (e.target.tagName === 'P') {
      addAnswer(e);
      changeSection(e);

      if (question === 3) {
        printResult();
      }
    }
  }

  function addAnswer(e) {
    answers.add(e.target.textContent);
    question++;
  }

  function changeSection(e) {
    const section = e.currentTarget;
    section.style.display = 'none';
    section.parentElement.children[question + 1].style.display = 'block';
  }

  function printResult() {
    result.textContent = answers.size === 3
      ? 'You are recognized as top JavaScript fan!'
      : `You have ${maxAnswers - answers.size} right answers`;
  }
}