import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border: 3px solid #333333;
  border-radius: 20px;
  flex-basis: calc(100 / 2 - 20px);
  padding: 10px;
  margin: 10px;
  background: #ffffff;
`;

const CardTitle = styled.h1`
  margin: 0;
`;

export default function Card(props) {
  const { title, date, id } = props.note;
  return (
    <CardBody>
      <Link to={`/editNote/${id}`}>
        <CardTitle>{title}</CardTitle>

        <p className="date">{date}</p>
      </Link>
    </CardBody>
  );
}
