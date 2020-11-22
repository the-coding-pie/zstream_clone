import React from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>
        Best Gaming At Cheapest Price!
      </h2>

      <p className="pricing__p">
        Subscribe now, Cancel anytime!
      </p>

      <div className="pricing__plans">
      <div className="pricing__div lite">
        <p className="plan_name">
          Lite
        </p>

        <p className="price">
        ₹599.99 <span>/ month</span>
        </p>

        <ul>
          <li> <span className="tick">&#10003;</span>  HD QUALITY</li>
          <li> <span className="tick">&#10003;</span> Play On Android, Windows, and MacOS</li>
        <li> <span className="tick">&#10003;</span> <strong>50</strong> HOURS ON DEMAND PLAY</li>
        <li> <span className="tick">&#10003;</span> <strong>60</strong> Games</li>
        </ul>

        <Button classes="btn btn-yellow">
          <Link to="#">START GAMING</Link>
        </Button>
      </div>

      <div className="pricing__div pro">
        <p className="plan_name">
          Pro
        </p>

        <p className="price">
        ₹999.99 <span>/ month</span>
        </p>

        <ul>
          <li><span className="tick">&#10003;</span> HD QUALITY</li>
          <li><span className="tick">&#10003;</span> Play On Android, Windows, and MacOS</li>
        <li><span className="tick">&#10003;</span> <strong>70</strong> HOURS ON DEMAND PLAY</li>
        <li><span className="tick">&#10003;</span> <strong>120</strong> Games</li>
        </ul>

        <Button classes="btn btn-green">
          <Link to="#">START GAMING</Link>
        </Button>
      </div>

      <div className="pricing__div ultra">
        <p className="plan_name">
          Ultra
        </p>

        <p className="price">
        ₹1499.99 <span>/ month</span>
        </p>

        <ul>
          <li><span className="tick">&#10003;</span> 4k QUALITY</li>
          <li><span className="tick">&#10003;</span> Play On Android, Windows, and MacOS</li>
        <li><span className="tick">&#10003;</span> <strong>90</strong> HOURS ON DEMAND PLAY</li>
        <li><span className="tick">&#10003;</span> <strong>200</strong> Games</li>
        </ul>

        <Button classes="btn">
          <Link to="#">START GAMING</Link>
        </Button>
      </div>
      </div>
    </section>
  );
}

export default Pricing;