import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={props.classes}>
      {props.children}
    </button>
  );
}

export default Button;