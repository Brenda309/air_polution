import { Link } from 'react-router-dom';
import { FaAngleLeft, FaCog } from 'react-icons/fa';
import './nav.css';

const Navbar = () => (
  <section className="navbar">
    <div className="toHome">
      <div>
        <Link to="/">
          <FaAngleLeft style={{ color: 'white', fontSize: '50px' }} />
        </Link>
      </div>
      <div>
        <p style={{ color: 'white', fontSize: '20px' }}>2022</p>
      </div>
    </div>
    <div>
      <h1 style={{ color: 'white', fontSize: '25px' }}>
        Air Pullution Forecast
      </h1>
    </div>
    <div>
      <FaCog style={{ color: 'white', fontSize: '40px' }} />
    </div>
  </section>
);
export default Navbar;
