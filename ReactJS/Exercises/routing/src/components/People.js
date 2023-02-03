import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(res => setPeople(res.results));
  }, []);

  return (
    <ul>
      {people.map((p, i) => <li key={p.name}><Link to={`${i + 1}`}>{p.name}</Link></li>)}
    </ul>
  );
};

export default People;