import './Vans.css';
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from 'react';
/**
* Challenge: Fetch and map over the data to display it on
* the vans page. For an extra challenge, spend time styling
* it to look like the Figma design.
* 
* Hints:
* 1. Use `fetch("/api/vans")` to kick off the request to get the
*    data from our fake Mirage JS server
* 2. What React hook would you use to fetch data as soon as the
*    Vans page loads, and only fetch it the one time?
* 3. You may get an error saying "console.groupCollapsed is not
*    a function". You can ignore it for now.
*/
function Vans() {
  // State to hold the fetched data
  const [ data, setData ] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    async function getVans() {
      const res = await fetch('api/vans');
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
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <div className="van-price">
          <p>${van.price}</p>
          <span>/day</span>
        </div>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
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