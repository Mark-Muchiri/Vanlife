import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  /**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
  return (
    <>
      {/* Nav */}
      <nav>
        <div className="logo">
          <p>#VANLIFE</p>
        </div>
        <div className="pages">
          <ul>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <li>Vans</li>
          </ul>
        </div>
      </nav>
      {/* Main */}
      <main>
        {/* image */}
        <div className="homecontainer">
          <img className='homeimg' src='../../public/vanlifehome.png' />
          {/* Hero text */}
          <p className='herotxt'>
            You got the travel plans,
            we got the travel vans.
          </p>
          <p className='herosubtxt'>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
          </p>
          <Link to='/'>
            <button className='findvanbutton'>
              <p>Find your van</p>
            </button>
          </Link>
        </div>
      </main>
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </>
  );
}
export default Home;