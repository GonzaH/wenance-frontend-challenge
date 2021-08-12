import { RECEIVE_PEOPLE, REMOVE_PERSON, APPLY_FILTER } from '../../utils/constants';

const storeData = (type, data) => ({ type, data })

export const savePeople = ({ next, results }) => (dispatch) => {
  dispatch(storeData(RECEIVE_PEOPLE, { next, people: results }));
};

// I think that, since the url has the internal id/index, it will be unique
// while I don't have any guarantee that the name is
export const removePerson = (url) => (dispatch) => {
  dispatch(storeData(REMOVE_PERSON, url));
};

export const applyPersonFilter = (filterContent) => (dispatch) => {
  dispatch(storeData(APPLY_FILTER, filterContent));
};
