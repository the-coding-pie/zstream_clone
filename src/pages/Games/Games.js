import React, { useContext, useState } from 'react';
import './Games.css';
import Trending from '../../components/Trending/Trending';
import { GameContext } from '../../contexts/GameContext';
import GameCard from '../../components/GameCard/GameCard';

const Games = () => {
  const { games } = useContext(GameContext);
  const [allGames, setAllGames] = useState(games);
  const [search, setSearch] = useState('');

  const gameList = allGames.length > 0 ? (
    allGames.map(game => {
      return (
        <GameCard key={game.id} game={game} />
      )
    })
  ) : (
    <p className="not_found">Oops, Nothing found!</p>
  );

  const handleSearch = (e) => {
    let keyword = e.target.value;
    setSearch(keyword);

    keyword = keyword.toLowerCase();

    if (keyword === '') {
      setAllGames(games)
    } else {
      let newList = allGames.filter(game => {
        return game.name.toLowerCase().includes(keyword)
      })
  
      setAllGames(newList)
    }
  }

  return (
    <main className="games">
      <div className="container">
        <Trending />

        <div className="games__browse">
          <h2>Browse Games</h2>

          <form>
          <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              onChange={handleSearch}
              onKeyDown={handleSearch}
              type="text" 
              placeholder="Search Games..."
              value={search} />
          </form>

          <div className="game__list">
            {gameList}
          </div>
        </div>

      </div>
    </main>
  );
}

export default Games;