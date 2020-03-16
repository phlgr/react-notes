import React from 'react';
import styled from '@emotion/styled';

const TitleInput = styled.input`
  font-family: Amatic SC;
  width: 80vw;
  font-size: 1.6rem;
  outline: none;
  padding: 10px;
  border: 3px solid #333333;
  border-radius: 20px;
  margin: 10px;
`;

const TextInput = styled.textarea`
  font-family: Amatic SC;
  font-size: 1.2rem;
  border: 2px dashed #333333;
  width: 80vw;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  height: 100vw;
  overflow: scroll;
  outline: none;
`;

export default function NoteInput({ note, onChange }) {
  return (
    <>
      <TitleInput
        value={note.title}
        onChange={event =>
          onChange({
            ...note,
            title: event.target.value
          })
        }
        type="text"
        placeholder="Title..."
      />
      <TextInput
        value={note.text}
        onChange={event => {
          onChange({
            ...note,
            text: event.target.value
          });
        }}
        className="input__text"
        type="textarea"
        placeholder="Enter your note..."
      />
    </>
  );
}
