import React from 'react';
import './visit.css';
import img1 from './images-1.jpeg';
import img2 from './img-2.jpg';
import img3 from './img-3.jpg';

const VisitPage = () => {
  return (<>
  <div className='text'>
    <h1>Visit The Strap Centres </h1><br/>
    <h4>A visit will be worth it and appreciate</h4>
  </div>
    <div className="visit-container">
      <section className="visit-section">
        <img src={img1} alt="Visit Section 1" />
        <div className="overlay">
          <h2>Wildlife Sanctuary</h2>
          <p>Explore the natural habitats of various species in our wildlife sanctuary.</p>
        </div>
        <div className='button'>visit</div>
      </section>

      <section className="visit-section">
        <img src={img2} alt="Visit Section 2" />
        <div className="overlay">
          <h2>Interactive Exhibits</h2>
          <p>Engage with our interactive exhibits and learn about animal conservation efforts.</p>
        </div>
        <div className='button'>visit</div>
      </section>

      <section className="visit-section">
        <img src={img3} alt="Visit Section 3" />
        <div className="overlay">
          <h2>Nature Trails</h2>
          <p>Take a stroll through our nature trails and enjoy the beauty of the natural surroundings.</p>
        </div>
        <div className='button'>visit</div>
      </section>
    </div>
    </>
  );
};

export default VisitPage;