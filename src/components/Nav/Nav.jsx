import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      {/* Nav */}
      <nav>
        <Link to='/'>
          <div className="logo">
            <p>#VANLIFE</p>
          </div>
        </Link>
        <div className="pages">
          <ul>
            <Link className={location.pathname === '/about' ? 'active' : ''} to='/about'>
              <li>About</li>
            </Link>
            <li>Vans</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;