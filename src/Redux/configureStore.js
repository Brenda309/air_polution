import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducerForNorth, getNorthCountries } from './regions/fetchNorthAfrica';
import { getEastCountries, reducerForEast } from './regions/fetchEatAfrica';
import { getSouthCountries, reducerForSouth } from './fetchSouth';
import { getWestCountries, reducerForWest } from './regions/fetchWest';

import { reducerApApi } from './fetchAPI';

const store = configureStore({
  reducer: {
    northAfrica: reducerForNorth,
    eastAfrica: reducerForEast,
    southAfrica: reducerForSouth,
    westAfrica: reducerForWest,
    apApi: reducerApApi,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => {
  store.getState();
});
store.dispatch(getNorthCountries());
store.dispatch(getSouthCountries());
store.dispatch(getEastCountries());
store.dispatch(getWestCountries());

export default store;
