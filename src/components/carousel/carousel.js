import React from 'react';
import img1 from './jackie.png';
import img2 from './jett.png';
import './carousel.css'

const imgData = [
  {"img" : img1,"food":"biryani"},{"img" : img2,"food":"fries"}
];


export default function Carousel() {
  return (
    <div className='carousel'>
      <div className='carousel-imgs'>
        <h1>Top Dishes Of the Week</h1>
      </div>
      <div className='imgs' style={{width: `${imgData.length*300}px`}}>
        {
          imgData.map((p, index) => (
            <div>
              <img key={index} src={p.img} alt={`Image ${index + 1}`} />
              <div>{p.food}</div>  
            </div>
          ))
        }
      </div>
    </div>
  );
}
