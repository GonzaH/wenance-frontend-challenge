import React, { useEffect, useState } from 'react';
import { useDispatch, /* shallowEqual, useSelector */ } from 'react-redux';

import { getPeople } from '../../utils/apiCalls/swapi';
import { savePeople } from '../../redux/actions/peopleActions';
import Filter from '../Atoms/Filter';
import CardList from '../Molecules/CardList';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  // const next = useSelector(({ next: nextInStore = 2 }) => nextInStore, shallowEqual);

  useEffect(() => {
    getPeople(currentPage)
      .then((result) => {
        dispatch(savePeople(result));
      })
      .finally(() => setLoading(false));
  }, []);

  return (<div>
    <Filter />
    <CardList loading={loading} />
  </div>);
};

export default Page;
