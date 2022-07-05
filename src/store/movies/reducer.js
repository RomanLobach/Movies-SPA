import {INIT_POPULAR, INIT_TOP_RATED, INIT_DITAILS, INIT_SEARCH} from './types';

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  detailsMovie: {},
  searchResults: []
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case INIT_POPULAR:
      return {
        ...state,
        popularMovies: [...action.payload]
      };
    case INIT_TOP_RATED:
      return {
        ...state,
        topRatedMovies: [...action.payload]
      };
    case INIT_DITAILS:
      return {
        ...state,
        detailsMovie: {...action.payload}
      };
    case INIT_SEARCH:
      return {
        ...state,
        searchResults: [...action.payload]
      };
    default:
      return state;
  }
}
