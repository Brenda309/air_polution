import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import africa from './Africa.png';
import './home.css';

const Home = () => {
  const getNorthCountries = useSelector((state) => state.northAfrica);
  const fetchCa = useSelector((state) => state.centralAmerica);
  const fetchSa = useSelector((state) => state.southAmerica);
  const fetchTc = useSelector((state) => state.theCaribbean);
  const na = getNorthCountries;
  const ca = fetchCa;
  const sa = fetchSa;
  const tc = fetchTc;

  return (
    <div className="wrapper">
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
      <p id="stats">Select capital city by region</p>
      <div className="regionCont">
        <Link to="/north_africa">
          <div role="button" tabIndex={0} className="na">
            {`Northern Africa ${na.length} main cities`}
          </div>
        </Link>
        <Link to="/details_central_america">
          <div role="button" tabIndex={0} className="ca">
            {`Central America ${ca.length} main cities`}
          </div>
        </Link>
        <Link to="/details_south_america">
          <div role="button" tabIndex={0} className="sa">
            {`South America ${sa.length} capital cities`}
          </div>
        </Link>
        <Link to="/details_the_caribbean">
          <div role="button" tabIndex={0} className="tc">
            {`The Caribbean ${tc.length} capital cities`}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
