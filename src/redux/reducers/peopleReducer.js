import { RECEIVE_PEOPLE, REMOVE_PERSON, APPLY_FILTER } from '../../utils/constants';

const initialState = {};

const getNextPage = (next) => {
  if (!next) return next;

  const [, nextPage] = next.split('page=');

  return nextPage;
};

const receivePeople = (state, { people, next }) => {
  const { people: currentPeople = [], filteredPeople = [] } = state;

  const allPeople = [...currentPeople, ...people];
  const allFilteredPeople = [...filteredPeople, ...people];

  return Object.assign(
    {},
    state,
    { people: allPeople, next: getNextPage(next), filteredPeople: allFilteredPeople }
  );
};

const removePerson = (state, selectedUrl) => {
  const { people, filteredPeople } = state;

  const urlFilter = (({ url }) => url !== selectedUrl);

  const peopleToKeep = people.filter(urlFilter);
  const filteredPeopleToKeep = filteredPeople.filter(urlFilter);

  return Object.assign({}, state, { people: peopleToKeep, filteredPeople: filteredPeopleToKeep });
};

const applyFilter = (state, filterContent) => {
  const { people } = state;

  const filteredPeople = people.filter(({ name }) => name.toLowerCase().includes(filterContent));

  return Object.assign({}, state, { filteredPeople });
};

const peopleReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_PEOPLE:
      return receivePeople(state, data);
    case REMOVE_PERSON:
      return removePerson(state, data);
    case APPLY_FILTER:
      return applyFilter(state, data);
    default:
      return state;
  }
}

export default peopleReducer;
