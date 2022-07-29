import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  reducerCa,
  reducerSa,
  reducerTc,
  // fetchCa,
  fetchSa,
  fetchTc,
} from './fetchData';
import { reducerForNorth, getNorthCountries } from './regions/fetchNorthAfrica';

import { reducerApApi } from './fetchAPI';

const store = configureStore({
  reducer: {
    northAfrica: reducerForNorth,
    centralAmerica: reducerCa,
    southAmerica: reducerSa,
    theCaribbean: reducerTc,
    apApi: reducerApApi,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => {
  store.getState();
});
store.dispatch(getNorthCountries());
// store.dispatch(fetchCa());
store.dispatch(fetchSa());
store.dispatch(fetchTc());

export default store;
