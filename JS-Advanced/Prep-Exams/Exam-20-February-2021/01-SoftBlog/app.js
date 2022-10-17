function solve() {
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', createPost);

   const posts = document.querySelector('.site-content section');
   const archiveSection = document.querySelector('.archive-section ol');

   function createPost(event) {
      event.preventDefault();
      const titleValue = title.value;

      const article = genElement('article', posts);
      genElement('h1', article, title.value);

      const pCategory = genElement('p', article, 'Category:');
      genElement('strong', pCategory, category.value);

      const pCreator = genElement('p', article, 'Creator:');
      genElement('strong', pCreator, author.value);

      genElement('p', article, content.value);

      const div = genElement('div', article);
      div.className = 'buttons';

      const deleteBtn = genElement('button', div, 'Delete');
      deleteBtn.className = 'btn delete';
      deleteBtn.addEventListener('click', deleteArticle);

      const archiveBtn = genElement('button', div, 'Archive');
      archiveBtn.className = 'btn archive';
      archiveBtn.addEventListener('click', archive);

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

      function archive() {
         deleteArticle();
         genElement('li', archiveSection, titleValue);

         Array
            .from(archiveSection.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => archiveSection.appendChild(e));
      }

      function deleteArticle() {
         article.remove();
      }
   }

   function genElement(tag, parent, textContent) {
      const element = document.createElement(tag);
      if (textContent) {
         element.textContent = textContent;
      }
      parent.appendChild(element);
      return element;
   }
}