const JokeArticle = ({ joke }) => {
  if (joke.value && !joke.value.startsWith('Chuck Norris')) {
    throw new Error('No Chuck Norris');
  }

  return (
    <article>
      <header>
        <img src={joke.icon_url} alt="Chuck Norris Joke" />
      </header>
      <main>
        <p className="joke" >{joke.value}</p>
      </main>
    </article>
  );
};

export default JokeArticle;