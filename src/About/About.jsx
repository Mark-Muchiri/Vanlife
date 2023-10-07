import './About.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

function About() {
  return (
    <>
      <Nav />
      <main>
        <img className='abtimg' src="/Abt-img.png" alt="" />
        <div className="abt-title-cont">
          <h2>
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
        </div>
        <div className="abt-p-cont">
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>
          <br />
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>
        <div className="abt-card">
          <p>
            Your destination is waiting.
            Your van is ready.
          </p>
          <button>
            <p>Explore our vans</p>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default About;