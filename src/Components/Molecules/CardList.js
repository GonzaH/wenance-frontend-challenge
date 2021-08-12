import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Card from './Card';
import Loading from '../../loading.gif';

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media only screen and (max-device-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Img = styled.img`
  width: 10em;
  heigth: 10em;
  padding: 2em;
  margin-left: auto;
  margin-right: auto;
`;

const CardList = ({ loading }) => {
  const people = useSelector(({ filteredPeople }) => filteredPeople, shallowEqual);

  if (loading) return <Img src={Loading} alt="Loading" />;

  return (<Div>
    {people.map(({ name, url, hair_color, birth_year }) => <Card
      // I use the url as key for the same reason I use it to
      // delete the person (explained in peopleActions).
      key={url}
      name={name}
      url={url}
      hair_color={hair_color}
      birth_year={birth_year}
    />)}
  </Div>);
};

export default CardList;
