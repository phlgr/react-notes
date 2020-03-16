import React from 'react';
import './AllNotes.css';
import Card from '../components/Card';

export default function AllNotes() {
  const [notes, setNotes] = React.useState(null);

  React.useEffect(() => {
    async function getNotes() {
      const response = await fetch('http://localhost:4000/notes');
      const notes = await response.json();
      setNotes(notes);
    }
    getNotes();
  }, []);

  return (
    <div className="card__container">
      {notes?.map(note => (
        <Card key={note.id} note={note} />
      ))}
    </div>
  );
}
