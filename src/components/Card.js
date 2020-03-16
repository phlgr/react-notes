import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { title, date, id } = props.note;
  return (
    <div className="card">
      <Link to={`/editNote/${id}`}>
        <h1 className="title">{title}</h1>

        <p className="date">{date}</p>
      </Link>
    </div>
  );
}
