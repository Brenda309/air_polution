const FETCH_WEST_AFRICA = 'air-pollution/Redux/Regions/FETCH_WEST_AFRICA';
const initialState = [];

export const getWestCountries = () => async (dispatch) => {
  const connect = await fetch('https://restcountries.com/v3.1/region/africa');
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const dataToGet = {
      country: item.name.common,
      population: item.population,
      capital: item.capital[0],
      region: item.subregion,
      flags: item.flags.png,
      latlng: item.latlng,
    };
    return dataToGet;
  });
  const western = dataArray.filter((item) => item.region === 'Western Africa');
  dispatch({
    type: FETCH_WEST_AFRICA,
    payload: western,
  });
};
export function reducerForWest(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEST_AFRICA:
      return action.payload;
    default:
      return state;
  }
}
