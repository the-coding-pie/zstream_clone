import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import Button from '../../components/Button/Button';
import './GameHome.css';

const GameHome = (props) => {
  const { games } = useContext(GameContext);
  const slug = props.match.params.slug;

  const game = games.find(game => (
    game.slug === slug
  ))
  ;

  const gamePage = game ? (
    <div className="game__page">
      <div className="game__page__banner" style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%), url(${game.bg})`
      }}>

        <Button classes="btn btn-primary">
          Play Now
        </Button>

      </div>

      <div className="game__page__details">
        <div className="container">
          <h1>{game.name}</h1>
          <div className="game__page__details__extras">
            <div className="rating">
              {game.rating}
            </div>
            <span className="genres">
              <strong>Genre: </strong>
              {game.genre.map(genre => (
                <span className="genre">{genre}</span>
              ))}
            </span>
          </div>
          <p>
            {game.desc}
          </p>

          <div className="action">
            <Button classes="btn btn-green">
                Play Now
            </Button>
            <Button classes="btn">
                Buy Now
            </Button>
          </div>

         
            <table className="game__details">
              <caption>Game Extras</caption>
              <thead>
                <tr>
                  <th>
                    Developer
                  </th>
                  <th>
                    Publisher
                  </th>
                  <th>
                    Released
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{game.developer}</td>
                  <td>{game.publisher}</td>
                  <td>{game.released}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  ) : (
    <p className="not_found">Oops Nothing found</p>
  );

  return (
    <main className="game_home">
        {gamePage}
      <div className="container">
      </div>
    </main>
  );
}

export default GameHome;