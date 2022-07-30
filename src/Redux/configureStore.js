import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducerForNorth, getNorthCountries } from './regions/fetchNorthAfrica';
import { getSouthCountries, reducerForSouth } from './regions/fetchSouthernAfr';
import { getEastCountries, reducerForEast } from './regions/fetchEatAfrica';

import { reducerApApi } from './fetchAPI';

const store = configureStore({
  reducer: {
    northAfrica: reducerForNorth,
    SauthAfrica: reducerForSouth,
    eastAfrica: reducerForEast,
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
export default store;
