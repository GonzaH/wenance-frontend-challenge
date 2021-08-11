import { getPeople } from '../../utils/apiCalls/swapi';
import { RECEIVE_PEOPLE } from '../../utils/constants';

const storeData = (type, data) => ({ type, data })

export const fetchPeople = (currentPage) => async (dispatch) => {
  const { next, results } = await getPeople(currentPage);

  dispatch(storeData(RECEIVE_PEOPLE, { next, people: results }));
}