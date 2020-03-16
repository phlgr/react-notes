import React from 'react';

export default function NoteInput({ note, onChange }) {
  return (
    <>
      <input
        value={note.title}
        onChange={event =>
          onChange({
            ...note,
            title: event.target.value
          })
        }
        className="input__title"
        type="text"
        placeholder="Title..."
      />
      <textarea
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
