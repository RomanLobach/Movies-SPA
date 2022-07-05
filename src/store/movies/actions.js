import {INIT_POPULAR, INIT_TOP_RATED, INIT_DITAILS, INIT_SEARCH} from './types';

export const setPopular = payload => ({
  type: INIT_POPULAR,
  payload
});

export const setTopRated = payload => ({
  type: INIT_TOP_RATED,
  payload,
});

export const setDetails = payload => ({
  type: INIT_DITAILS,
  payload,
});

export const setSearch = payload => ({
  type: INIT_SEARCH,
  payload,
});



