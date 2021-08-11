import { RECEIVE_PEOPLE } from '../../utils/constants';

const initialState = {};

const getNextPage = (next) => {
  if (!next) return next;

  const [, nextPage] = next.split('page=');

  return nextPage;
}

const peopleReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_PEOPLE:
      const { people, next } = data;

      return Object.assign({}, state, { people, next: getNextPage(next) });
    default:
      return state;
  }
}

export default peopleReducer;
