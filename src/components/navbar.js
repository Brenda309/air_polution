import { Link } from 'react-router-dom';

const Navbar = () => (
  <section className="navbar">
    <div className="links">
      <ul className="list">
        <li>
          <Link className="home" to="/">
            Books
          </Link>
        </li>
        <li className="catego">
          <Link
            to="/details"
          >
            Details
          </Link>
        </li>
      </ul>
    </div>
  </section>
);
export default Navbar;
