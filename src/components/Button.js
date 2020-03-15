import React from 'react';
import './Button.css';

export default function Button(props) {
  const { type, theme, img, label } = props;
  return (
    <>
      <button type={`${type}`} className={`btn-primary btn-${theme}`}>
        <img className="btn-image" src={img} alt="" />
        {label}
      </button>
    </>
  );
}
