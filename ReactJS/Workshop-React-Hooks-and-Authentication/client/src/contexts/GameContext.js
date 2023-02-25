import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import * as gameService from '../services/gameService';

export const GameContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GAMES':
      return [...action.payload];
    case 'ADD_GAME':
      console.log([...state, action.payload]);
      return [...state, action.payload];
    case 'EDIT_GAME':
      return state.map(x => x._id === action.gameId ? action.payload : x);
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [games, dispatch] = useReducer(gameReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll()
      .then(result => dispatch({
        type: 'ADD_GAMES',
        payload: result
      }));
  }, []);

  const addGameHandler = (gameData) => {
    dispatch({
      type: 'ADD_GAME',
      payload: gameData
    });
    navigate(`/catalog/${gameData._id}`);
  };

  const editGameHanlder = (gameId, gameData) => {
    dispatch({
      type: 'EDIT_GAME',
      payload: gameData,
      gameId
    });
  };

  const addComment = (commentData, gameId) => {
    // setGames(state => {
    //   let game = {};
    //   const newGames = [];

    //   state.forEach(g => {
    //     if (g._id === gameId) {
    //       game = g;
    //       const comments = game.comments || [];
    //       comments.push(commentData);
    //       game.comments = comments;
    //     } else {
    //       newGames.push({ ...g });
    //     }
    //   });

    //   return [...newGames, { ...game }];
    // });
  };

  return (
    <GameContext.Provider value={{ games, addGameHandler, editGameHanlder, addComment }} >
      {children}
    </GameContext.Provider>
  );
};