import React from 'react';
import Button from '../components/Button';
import NewNoteImg from '../assets/new_note.svg';
import AllNotesImg from '../assets/all_notes.svg';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const ButtonPurple = styled(Button)`
  background: #e3c2ff;
`;

export default function Home() {
  return (
    <HomeContainer className="home__container">
      <Link to="/newNote">
        <Button theme="green" img={NewNoteImg} label="New Note" />
      </Link>
      <Link to="/allNotes">
        <ButtonPurple theme="purple" img={AllNotesImg} label="All Notes" />
      </Link>
    </HomeContainer>
  );
}
