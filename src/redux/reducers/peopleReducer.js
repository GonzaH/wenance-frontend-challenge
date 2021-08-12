import { RECEIVE_PEOPLE, REMOVE_PERSON, APPLY_FILTER } from '../../utils/constants';

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

      return Object.assign({}, state, { people, next: getNextPage(next), filteredPeople: people });
    case REMOVE_PERSON:
      const { people: allPeople } = state;

      const peopleToKeep = allPeople.filter(({ url }) => url !== data);

      return Object.assign({}, state, { people: peopleToKeep });
    case APPLY_FILTER:
      const { people: nonFilteredPeople } = state;

      const filteredPeople = nonFilteredPeople.filter(({ name }) => name.toLowerCase().includes(data));

      return Object.assign({}, state, { filteredPeople });
    default:
      return state;
  }
}

export default peopleReducer;
