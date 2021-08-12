import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import { FILTER_PLACEHOLDER } from '../../utils/constants';
import { applyPersonFilter } from '../../redux/actions/peopleActions';

const Form = styled.form`
  margin: 1em;
`;

const Input = styled.input`
  margin-right: .5em;
  font-size: 1.4em;
  background: #A6ECD0;
  border-radius: 7px;
`;

const Button = styled.button`
  font-size: 1.4em;
  background: #A6ECD0;
  border-radius: 7px;
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
