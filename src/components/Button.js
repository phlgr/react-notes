import React from 'react';
import styled from '@emotion/styled';

const ButtonPrimary = styled.button`
  font-family: 'Amatic SC';
  font-size: 2.2rem;
  box-shadow: 3px 3px 6px lightgrey;
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 5px 25px;
  display: flex;
  align-items: center;
  margin: 10px;
  background: #cfffdb;
`;
const ButtonImage = styled.img`
  max-width: 25px;
  margin-right: 10px;
`;

export default function Button(props) {
  const { img, label } = props;
  return (
    <>
      <ButtonPrimary>
        <ButtonImage className="btn-image" src={img} alt="" />
        {label}
      </ButtonPrimary>
    </>
  );
}
