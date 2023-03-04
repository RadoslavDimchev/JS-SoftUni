import { useCallback, useMemo, useState } from "react";
import CharacterItem from "./CharacterItem";

function wait(ms) {
  var start = Date.now(),
    now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

const CharacterList = ({
  characters
}) => {
  const [favorite, setFavorite] = useState('');

  const selectFavorite = useCallback((name) => {
    setFavorite(name);
  }, []);

  const meaningOfLife = useMemo(() => {
    wait(500);

    return 42;
  }, []);

  return (
    <>
      <h2>{favorite || 'Select favorite character'}</h2>
      <h3>{meaningOfLife}</h3>
      <ul>
        {characters.map(c =>
          <CharacterItem
            onClick={selectFavorite} key={c.name}
            character={c}
          />
        )}
      </ul>
    </>
  );
};

export default CharacterList;