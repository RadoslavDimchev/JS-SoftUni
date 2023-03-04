import { memo } from "react";

const CharacterItem = ({
  character,
  onClick
}) => {
  return (
    <li onClick={() => onClick(character.name)} >{character.name}</li>
  );
};

export default memo(CharacterItem);