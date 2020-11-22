import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Lambo from '../../assets/img/lambo.jpg';
import CP from '../../assets/img/cp.jpg';
import WD2 from '../../assets/img/wd2.jpg';
import Pricing from '../../components/Pricing/Pricing';
import Button from '../../components/Button/Button';
import Trending from '../../components/Trending/Trending';
import vid from '../../assets/file.mp4'

const Home = () => {
  return (
    <main className="home">
      <div className="home__backdrop">
        
          <section className="backdrop__vid">
            <video autoPlay muted loop id="video__bg">
              <source src={vid} />
            </video>
            <div className="bg__wrapper"></div>
            <div className="backdrop__vid__content">
            <h1>Welcome to Z STREAM, <br /> India's first cloud gaming platform</h1>
           <Button classes="btn btn-primary explore-btn">
             <Link to="/games">Explore</Link>
           </Button>
            </div>
          </section>
     
      </div>

      <div className="container">

        <div className="home__div">
          <Card>
            <img src={CP} />
          </Card>
          <section className="msg msg_left">
            <h3>No More Installs</h3>
            <p>
            From now on, <br />
            you can play all your favourite games <br />
            without Downloading, <br />
            without Installing, <br />
            and without Setting Anything Up!
            </p>
           </section>
        </div>

        <div className="home__div">
        <Card>
            <img src={Lambo} />
          </Card>
          <section className="msg msg_right">
            <h3>Browse and Play</h3>
           <p>
           Just Browse and Play <br />
           all your favorite Games, <br />
            in less than a minute <br />
            from anywhere, at anytime! 
           </p>
          </section>
        </div>

        <div className="home__div">
          <Card>
            <img src={WD2} />
          </Card>
          <section className="msg msg_left">
            <h3>Aurora</h3>
            <p>
            Aurora is a Artificial Intelligence <br />
            based render engine powering the Z  <br />
            Stream which means slow internet 
            <br />
            won't make you go crazy.
            </p>
           </section>
        </div>

        {/* trending */}
        <Trending>
          <Button classes="btn btn-green">
            <Link to="/games">
              Explore
            </Link>
          </Button>
        </Trending>



      {/* pricing plans */}
      <Pricing />
      
      </div>
    </main>
  );
}

export default Home;