import { useEffect, useState } from "react";
import JokeArticle from "./JokeArticle";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(result => {
        setJoke(result);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <JokeArticle joke={joke} />
  );
};

export default RandomJoke;