import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import { fetchPeople } from '../../redux/actions/peopleActions';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople(currentPage));
  }, []);

  return <label>Hi</label>;
};

export default Page;
