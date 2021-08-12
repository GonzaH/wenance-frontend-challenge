import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getPeople } from '../../utils/apiCalls/swapi';
import { savePeople } from '../../redux/actions/peopleActions';
import Filter from '../Molecules/Filter';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const people = useSelector(({ people: peopleInStore = {} }) => peopleInStore, shallowEqual);
  const next = useSelector(({ next: nextInStore = 2 }) => nextInStore, shallowEqual);

  useEffect(() => {
    getPeople(currentPage)
      .then((result) => {
        dispatch(savePeople(result));
      })
      .finally(() => setLoading(false));

  }, []);

  return (<div>
    <Filter />
    <label>Hi</label>
  </div>);
};

export default Page;
