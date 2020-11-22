import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ game }) => {
  return (
    <div className="game_card">
      <Link to={`games/${game.slug}`}>
      <img src={game.thumbnail} />
      <div className="game_card__extras">
      <h3>
        {game.name.length > 8 ? (game.name.substr(0, 8) + '...') : (
         game.name
        )}
      </h3>
      <span className="rating">{game.rating}</span>
      </div>
      </Link>
    </div>
  );
}

export default GameCard;