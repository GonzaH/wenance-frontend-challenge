const BASE_SWAPI_URL = 'https://swapi.dev/api/';

const getter = (url) => fetch(`${BASE_SWAPI_URL}${url}`).then((response) => response.json());

export const getBreedList = (currentPage) => getter(`people/?page=${currentPage}`);
