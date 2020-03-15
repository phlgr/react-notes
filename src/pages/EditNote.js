import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import SaveNoteImg from '../assets/SaveNoteImg.svg';

export default function EditNote() {
  const { noteId } = useParams();
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`http://localhost:4000/notes/${noteId}`);
      const note = await response.json();
      setTitle(note.title);
      setText(note.text);
    }

    getPoll();
  }, [noteId]);

  async function handleSubmit(event) {
    const responseDelete = await fetch(
      `http://localhost:4000/notes/${noteId}`,
      {
        method: 'DELETE'
      }
    );
    const deleted = await responseDelete.json();
    console.log(deleted);

    const note = {
      title: title,
      text: text,
      date: new Date()
    };

    const response = await fetch('http://localhost:4000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });
    const createdPoll = await response.json();
    alert(`Created note with the id ${createdPoll.id}`);
  }

  return (
    <form className="NewNote__container">
      <div className="container__inputs">
        <input
          defaultValue={title}
          onChange={value => setTitle(value.target.value)}
          className="input__title"
        />
        <textarea
          defaultValue={text}
          onChange={value => setText(value.target.value)}
          className="input__text"
          type="textarea"
          placeholder="Enter your note..."
        />
      </div>
      <Link to="/allNotes" onClick={handleSubmit}>
        <Button
          type="submit"
          theme="green"
          img={SaveNoteImg}
          label="Edit and Save"
        />
      </Link>
    </form>
  );
}
