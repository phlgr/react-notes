import React from 'react';
import Card from '../components/Card';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

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
    <CardContainer>
      {notes?.map(note => (
        <Card key={note.id} note={note} />
      ))}
    </CardContainer>
  );
}
