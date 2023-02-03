import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Film = ({
  films
}) => {
  const { filmId } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(films.find(f => f.includes(filmId)))
      .then(res => res.json())
      .then(res => setFilm(res));
  }, [filmId, films]);

  return (
    <h3>{film.title || 'No title'}</h3>
  );
};

export default Film;