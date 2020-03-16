import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SaveNoteImg from '../assets/SaveNoteImg.svg';
import NoteInput from '../components/NoteInput';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export default function NewNote() {
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  async function handleSubmit(event) {
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
    <Form className="NewNote__container" onSubmit={handleSubmit}>
      <InputContainer>
        <NoteInput
          note={{
            title,
            text
          }}
          onChange={note => {
            setTitle(note.title);
            setText(note.text);
          }}
        />
      </InputContainer>
      <Link to="/allNotes" onClick={handleSubmit}>
        <Button type="submit" theme="green" img={SaveNoteImg} label="Save" />
      </Link>
    </Form>
  );
}
