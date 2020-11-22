import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  }

  return (
    <header className="header">
      <div className="container">
      <div className="header__brand" >
      <Link to="/" >
        ZSTREAM
      </Link>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
          <li>
            <Link to="/#">Blog</Link>
          </li>

          <span className="nav__separator">|</span>

          <li>
            <Link to="/#">Login</Link>
          </li>
          <li>
            <Button classes="btn">
              <Link to="/#" className="btn">Sign up</Link>
            </Button>
          </li>
        </ul>
      </nav>

        <div className="hamburger">
            <button className="hamburger__btn">
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleClick}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
              
            ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleClick}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      )}
            </button>
        </div>
      </div>

      {open && (<nav className="nav__mobile">
        <ul>
          <li>
            <NavLink to="/pricing" onClick={() => {
              setOpen(false)
            }}>Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/games" onClick={() => {
              setOpen(false)
            }}>Games</NavLink>
          </li>
          <li>
            <Link to="/#" onClick={() => {
              setOpen(false)
            }}>Blog</Link>
          </li>

          <li>
            <Link to="/#" onClick={() => {
              setOpen(false)
            }}>Login</Link>
          </li>
          <li>
            <Button classes="btn">
              <Link to="/#" className="btn" onClick={() => {
                setOpen(false)
              }}>Sign up</Link>
            </Button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
}
export default Header;