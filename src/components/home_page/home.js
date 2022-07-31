import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import africa from './Africa.png';
import './home.css';

const Home = () => {
  const getNorthCountries = useSelector((state) => state.northAfrica);
  const getEastCountries = useSelector((state) => state.eastAfrica);
  const getSouthCountries = useSelector((state) => state.southAfrica);
  const getWestCountries = useSelector((state) => state.westAfrica);
  return (
    <div className="wrapper">
      <div className="home">
        <div>
          <img id="africa" src={africa} alt="Africa-continent" />
        </div>
        <div>
          <div>
            <p className="cities">Africa</p>
          </div>
          <div>
            <p className="ncities">Cities:54</p>
          </div>
        </div>
      </div>
      <p id="country">Select country by region</p>
      <div className="regions">
        <Link to="/north_africa">
          <div role="button" tabIndex={0} className="northy">
            {`Northern Africa ${getNorthCountries.length} main cities`}
          </div>
        </Link>
        <Link to="/east_africa">
          <div role="button" tabIndex={0} className="easty">
            {`Eastern Africa ${getEastCountries.length} main cities`}
          </div>
        </Link>
        <Link to="/south_africa">
          <div role="button" tabIndex={0} className="southy">
            {`Southern Africa ${getSouthCountries.length} main cities`}
          </div>
        </Link>
        <Link to="/west_africa">
          <div role="button" tabIndex={0} className="westy">
            {`western Africa ${getWestCountries.length} main cities`}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
