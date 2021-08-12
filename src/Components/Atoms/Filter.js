import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import { FILTER_PLACEHOLDER } from '../../utils/constants';
import { applyPersonFilter } from '../../redux/actions/peopleActions';

const Filter = () => {
  const [filterContent, setFilterContet] = useState('');
  const dispatch = useDispatch();

  return (<div>
    <input
      placeholder={FILTER_PLACEHOLDER}
      onChange={({ target: { value } }) => setFilterContet(value)} value={filterContent}
    />
    <button onClick={() => dispatch(applyPersonFilter(filterContent.toLowerCase()))}>Search</button>
  </div>);
};

export default Filter;
