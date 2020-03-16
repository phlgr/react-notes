import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
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

export default function EditNote() {
  const { noteId } = useParams();
  const history = useHistory();

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
    event.preventDefault();

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
    history.push('/allNotes');
  }

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button
        type="submit"
        theme="green"
        img={SaveNoteImg}
        label="Edit and Save"
      />
    </Form>
  );
}
