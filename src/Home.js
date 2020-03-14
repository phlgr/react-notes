import React from 'react';
import Button from './components/Button';
import './Home.css';
import NewNoteImg from './assets/new_note.svg';
import AllNotesImg from './assets/all_notes.svg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home__container">
      <Link to="/newNote">
        <Button theme="green" img={NewNoteImg} label="New Note" />
      </Link>
      <Link to="/allNotes">
        <Button theme="purple" img={AllNotesImg} label="All Notes" />
      </Link>
    </div>
  );
}
