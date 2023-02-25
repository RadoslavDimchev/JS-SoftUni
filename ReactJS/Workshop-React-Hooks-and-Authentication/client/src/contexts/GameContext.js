import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as gameService from '../services/gameService';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll()
      .then(res => setGames(res));
  }, []);

  const addGameHandler = (gameData) => {
    setGames(state => [...state, gameData]);
    navigate(`/catalog/${gameData._id}`);
  };

  const editGameHanlder = (gameId, gameData) => {
    setGames(state => state.map(g => g._id === gameId ? gameData : g));
  };

  const addComment = (commentData, gameId) => {
    setGames(state => {
      let game = {};
      const newGames = [];

      state.forEach(g => {
        if (g._id === gameId) {
          game = g;
          const comments = game.comments || [];
          comments.push(commentData);
          game.comments = comments;
        } else {
          newGames.push({ ...g });
        }
      });

      return [...newGames, { ...game }];
    });
  };

  return (
    <GameContext.Provider value={{ games, addGameHandler, editGameHanlder, addComment }} >
      {children}
    </GameContext.Provider>
  );
};