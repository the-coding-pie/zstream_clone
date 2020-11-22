import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import GameCard from '../GameCard/GameCard';
import './Trending.css';

const Trending = ({ children }) => {
  const { games } = useContext(GameContext);
  const trendingGames = games.slice(0, 7).map(game => {
    return (
      <GameCard key={game.id} game={game} />
    )
  });

  return (
    <section className="trending">
      <div className="trending__top">
      <h2>Trending Now</h2>
        <div className="trending__children">
      {children}
      </div>
      </div>
      <div className="trending__games">
        {trendingGames}
      </div>

    
    </section>
  );
}

export default Trending;