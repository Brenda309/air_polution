// const FETCH_NA = 'air-pollution/cities/FETCH_NA';
const FETCH_CA = 'air-pollution/cities/FETCH_CA';
const FETCH_SA = 'air-pollution/cities/FETCH_SA';
const FETCH_TC = 'air-pollution/cities/FETCH_TC';
const initialState = [];

// export const fetchNa = () => async (dispatch) => {
//   const connect = await fetch('https://restcountries.com/v3.1/region/africa');
//   const res = await connect.json().then((dataObject) => dataObject);
//   const dataArray = res.map((item) => {
//     const container = {
//       country: item.name.common,
//       population: item.population,
//       capital: item.capital[0],
//       region: item.subregion,
//       flags: item.flags.png,
//       latlng: item.latlng,
//     };
//     return container;
//   });
//   const southAmerica = dataArray.filter(
//     (item) => item.region === 'Southern Africa',
//   );
//   dispatch({
//     type: FETCH_SA,
//     payload: southAmerica,
//   });
// };
// export const fetchCa = () => async (dispatch) => {
//   const connect = await fetch('https://restcountries.com/v3.1/region/africa');
//   const res = await connect.json().then((dataObject) => dataObject);
//   const dataArray = res.map((item) => {
//     const container = {
//       country: item.name.common,
//       population: item.population,
//       capital: item.capital[0],
//       region: item.subregion,
//       flags: item.flags.png,
//       latlng: item.latlng,
//     };
//     return container;
//   });
//   const northAmerica = dataArray.filter(
//     (item) => item.region === 'Northern Africa',
//   );
//   dispatch({
//     type: FETCH_NA,
//     payload: northAmerica,
//   });
// };

export const fetchSa = () => async (dispatch) => {
  const connect = await fetch('https://restcountries.com/v3.1/region/africa');
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const container = {
      country: item.name.common,
      population: item.population,
      capital: item.capital[0],
      region: item.subregion,
      flags: item.flags.png,
      latlng: item.latlng,
    };
    return container;
  });
  const southAmerica = dataArray.filter(
    (item) => item.region === 'Western Africa',
  );
  dispatch({
    type: FETCH_SA,
    payload: southAmerica,
  });
};

export const fetchTc = () => async (dispatch) => {
  const connect = await fetch('https://restcountries.com/v3.1/region/africa');
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const container = {
      country: item.name.common,
      population: item.population,
      capital: item.capital[0],
      region: item.subregion,
      flags: item.flags.png,
      latlng: item.latlng,
    };
    return container;
  });
  const theCaribbean = dataArray.filter((item) => item.region === 'Eastern Africa');
  dispatch({
    type: FETCH_TC,
    payload: theCaribbean,
  });
};

// export function reducerNa(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_NA:
//       return action.payload;
//     default:
//       return state;
//   }
// }

export function reducerCa(state = initialState, action) {
  switch (action.type) {
    case FETCH_CA:
      return action.payload;
    default:
      return state;
  }
}

export function reducerSa(state = initialState, action) {
  switch (action.type) {
    case FETCH_SA:
      return action.payload;
    default:
      return state;
  }
}

export function reducerTc(state = initialState, action) {
  switch (action.type) {
    case FETCH_TC:
      return action.payload;
    default:
      return state;
  }
}
