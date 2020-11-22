import React, { createContext, useState } from 'react';
import { gameData } from '../games';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [games, setGames] = useState([...gameData]);

  return (
    <GameContext.Provider value={{
      games
    }}>
      { children }
    </GameContext.Provider>
  );
}

export default GameContextProvider;