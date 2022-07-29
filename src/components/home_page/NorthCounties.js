import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import CapitalCard from './CapitalCard';
import { getNorthCountries } from '../../Redux/regions/fetchNorthAfrica';

const NorthCountries = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const northCapital = useSelector((state) => state.northAfrica);
  useEffect(() => {
    if (!northCapital.length) {
      dispatch(getNorthCountries());
    }
  }, [dispatch]);
  const filteredCountries = northCapital.filter((item) => item.country.toLowerCase()
    .includes(search.toLocaleLowerCase()));

  return (
    <>
      <div className="container-input">
        <input
          className="filterBox"
          type="text"
          placeholder="Search by country"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div id="capitals" className="capitalCont">
        {filteredCountries.map((item) => (
          <Link key={nanoid()} to="/details_api_data">
            <CapitalCard
              key={nanoid()}
              imgSrc={item.flags}
              country={item.country}
              capital={item.capital}
              lat={item.latlng[0]}
              lon={item.latlng[1]}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default NorthCountries;
