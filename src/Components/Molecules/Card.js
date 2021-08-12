import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removePerson } from '../../redux/actions/peopleActions';

const Div = styled.div`
  margin: 1em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  background-color: #8AE1B3;
  color: #D0006E;
  border-radius: 5px;
`;

const H2 = styled.h2``;

const Dl = styled.dl`
  padding: 1em;
`;

const Dt = styled.dt`
  text-decoration: underline;
  font-weight: bold;
`;

const Dd = styled.dd``;

const Button = styled.button`
  background-color: red;
  color: black;
  border-radius: 5px;
  width: max-content;
  padding: 1em;
  margin-left: auto;
  margin-right: auto;
`;

const Card = ({ name, url, hair_color, birth_year }) => {
  const dispatch = useDispatch();

  return (<Div>
    <H2>{name}</H2>
    <Dl>
      <Dt>Year of birth:</Dt>
      <Dd>{birth_year}</Dd>
      <Dt>Hair color:</Dt>
      <Dd>{hair_color}</Dd>
    </Dl>
    <Button onClick={() => dispatch(removePerson(url))}>Delete</Button>
  </Div>)
};

export default Card;
