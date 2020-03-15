import React from 'react';
import './Header.css';
import logo from './assets/logo.svg';

export default function Header() {
  return (
    <div className="header__container">
      <div className="brand">
        <img className="brand__logo" src={logo} alt=""></img>
        <h1 className="brand__name">Easy Note</h1>
      </div>
    </div>
  );
}
