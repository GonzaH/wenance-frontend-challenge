import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import { FILTER_PLACEHOLDER } from '../../utils/constants';
import { applyPersonFilter } from '../../redux/actions/peopleActions';

const Form = styled.form`
  margin: 1em;

  @media only screen and (max-device-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Input = styled.input`
  margin-right: .5em;
  font-size: 1.4em;
  background: #A6ECD0;
  border-radius: 7px;

  @media only screen and (max-device-width: 700px) {
    margin-right: 0;
    font-size: 1em;
    margin-bottom: .5em;
  }
`;

const Button = styled.button`
  font-size: 1.4em;
  background: #A6ECD0;
  border-radius: 7px;

  @media only screen and (max-device-width: 700px) {
    font-size: 1em;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Filter = () => {
  const [filterContent, setFilterContet] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(applyPersonFilter(filterContent.toLowerCase()));
  }

  return (<Form onSubmit={handleSubmit}>
    <Input
      placeholder={FILTER_PLACEHOLDER}
      onChange={({ target: { value } }) => setFilterContet(value)} value={filterContent}
    />
    <Button type="submit">Search</Button>
  </Form>);
};

export default Filter;
