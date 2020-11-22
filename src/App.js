import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Pricing from './pages/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import GameContextProvider from './contexts/GameContext';
import GameHome from './pages/GameHome/GameHome';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <GameContextProvider>
          <div className="main">
          <Switch>
            <Route path="/games" exact component={Games} />
            <Route path="/games/:slug" exact component={GameHome} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/" exact component={Home} />
          </Switch>
          </div>
        </GameContextProvider>

        <Footer />
      </div>
    </Router>
  )
}

export default App;