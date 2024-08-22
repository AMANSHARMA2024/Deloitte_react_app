import React from 'react';
import './../styles/Gallery.css';



import g1 from './../assets/images/g1.jpg';
import g2 from './../assets/images/g2.jpg';
import g3 from './../assets/images/g3.jpg';
import g4 from './../assets/images/g4.jpg';
import g5 from './../assets/images/g5.jpg';
import g6 from './../assets/images/g6.jpg';
import g7 from './../assets/images/g7.jpg';
import g8 from './../assets/images/g8.jpg';
import g9 from './../assets/images/g9.jpg';
import g10 from './../assets/images/g10.jpg';
import g11 from './../assets/images/g11.jpg';
import g12 from './../assets/images/g12.jpg';

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="title-box"></div>
      <br></br>
      <h1>Wineyard</h1>
      <br></br>
      <br></br>
      <br></br>
      <div className="line"></div>
      <div className="wrapper">
        {images.map((image, index) => (
          <div className={`box box${index + 1}`} key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;