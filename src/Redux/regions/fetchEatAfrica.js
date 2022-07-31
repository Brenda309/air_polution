const FETCH_EAST_AFRICA = 'air-pollution/Redux/Regions/FETCH_EAST_AFRICA';
const initialState = [];

export const getEastCountries = () => async (dispatch) => {
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
  const Southern = dataArray.filter((item) => item.region === 'Eastern Africa');
  dispatch({
    type: FETCH_EAST_AFRICA,
    payload: Southern,
  });
};
export function reducerForEast(state = initialState, action) {
  switch (action.type) {
    case FETCH_EAST_AFRICA:
      return action.payload;
    default:
      return state;
  }
}
