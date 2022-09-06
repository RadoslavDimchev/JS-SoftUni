function getArticleGenerator(articles) {
  const div = document.getElementById('content');

  return function () {
    const firstElement = articles.shift();

    if (firstElement) {
      const article = document.createElement('article');
      article.textContent = firstElement;
      div.appendChild(article);
    }
  };
}