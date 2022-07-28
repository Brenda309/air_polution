import React from 'react';
import './home.css';
import Africa from './Africa.png';

function Home() {
  return (
    <section className="home">
      <div>
        <img id="africa" src={Africa} alt="Africa-continent" />
      </div>
      <div>
        <div>
          <p className="cities">Africa</p>
        </div>
        <div>
          <p className="ncities">Cities:54</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
