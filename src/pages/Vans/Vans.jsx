import './Vans.css';
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Vans() {
  // State to hold the fetched data
  const [ data, setData ] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    async function getVans() {
      const res = await fetch('/api/vans');
      const data = await res.json();
      setData(data.vans);
    }
    getVans();
  }, []);

  // Map through filter buttons
  const filter = [ 'Simple', 'Luxury', 'Rugged' ];
  const filterCards = filter.map((filterItem, index) => (
    <div className="filter-button" key={index}>
      <p>{filterItem}</p>
    </div>
  ));

  // Map the data through cards
  const vanElements = data.map(van => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <div className="van-price">
            <p>${van.price}</p>
            <span>/day</span>
          </div>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <>
      <Nav />
      <main className="vans-margin">
        <h1>Explore our van options</h1>
        {/* Filters */}
        <div className="filters">
          {filterCards}
          <div className="clear-cont">
            <p>Clear Filters</p>
          </div>
        </div>
        {/* Vans data */}
        <div className="van-list-container">
          <div className="van-list">
            {vanElements}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Vans;