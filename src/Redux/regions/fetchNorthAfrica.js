const FETCH_NORTH_AFRICA = 'air-pollution/Redux/Regions/FETCH_NORTH_AFRICA';
const initialState = [];

export const getNorthCountries = () => async (dispatch) => {
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
  const northern = dataArray.filter(
    (item) => item.region === 'Northern Africa',
  );
  dispatch({
    type: FETCH_NORTH_AFRICA,
    payload: northern,
  });
};
export function reducerForNorth(state = initialState, action) {
  switch (action.type) {
    case FETCH_NORTH_AFRICA:
      return action.payload;
    default:
      return state;
  }
}
