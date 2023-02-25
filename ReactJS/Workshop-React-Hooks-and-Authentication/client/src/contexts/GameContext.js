import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import * as gameService from '../services/gameService';

export const GameContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GAMES':
      return action.payload.map(x => ({ ...x, comments: [] }));
    case 'ADD_GAME':
      return [...state, action.payload];
    case 'EDIT_GAME':
    case 'FETCH_GAME_DETAILS':
      return state.map(x => x._id === action.gameId ? action.payload : x);
    case 'ADD_COMMENT':
      return state.map(x => x._id === action.gameId ? { ...x, comments: [...x.comments, action.payload] } : x);
    case 'REMOVE_GAME':
      return state.filter(x => x._id !== action.gameId);
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

  const fetchGameDetails = (gameId, gameData) => {
    dispatch({
      type: 'FETCH_GAME_DETAILS',
      payload: gameData,
      gameId
    });
  };

  const selectGame = (gameId) => {
    return games.find(x => x._id === gameId) || {};
  };

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

  const addComment = (gameId, commentData) => {
    dispatch({
      type: 'ADD_COMMENT',
      payload: commentData,
      gameId
    });
  };

  const removeGameHandler = (gameId) => {
    dispatch({
      type: 'REMOVE_GAME',
      gameId
    });
  };

  return (
    <GameContext.Provider value={{
      games,
      addGameHandler,
      editGameHanlder,
      addComment,
      fetchGameDetails,
      selectGame,
      removeGameHandler
    }} >
      {children}
    </GameContext.Provider>
  );
};