import React from 'react';
import './AllNotes.css';
import Card from '../components/Card';

export default function AllNotes() {
  const [cards, setCards] = React.useState(null);
  React.useEffect(() => {
    async function getNotes() {
      const response = await fetch('http://localhost:4000/notes');
      const notes = await response.json();
      console.log(cards);
      const Cards = notes.map((note, i) => (
        <Card
          key={i.id}
          title={note.title}
          date={note.date}
          id={note.id}
        ></Card>
      ));
      setCards(Cards);
      console.log(Cards);
    }
    getNotes();
  }, []);
  return <div className="card__container">{cards}</div>;
}
