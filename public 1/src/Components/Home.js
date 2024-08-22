import React from 'react';
import homestyle from './../styles/Home.module.css';
import winster from './../assets/images/Winster.png';
import Bestseller from './../assets/images/Our Best Sellers.png';
import Sale from './../assets/images/Sale.png';
import Rasa from './../assets/images/1.jpeg';
import Dindori from './../assets/images/11.webp';
import Thesource from './../assets/images/6.jpeg';
import Syrah from './../assets/images/2.jpeg';
import Grenache from './../assets/images/5.jpeg';
import Viognier from './../assets/images/10.webp';
import Brut from './../assets/images/14.webp';
import Shiraz from './../assets/images/15.webp';
import Zinfadel from './../assets/images/18.webp';


const Home = () => {
  return (
    <div className={homestyle.body}>
      {/* Carousel */}
      <div id="carouselIndicators" className={`carousel carousel-dark slide ${homestyle.carousel}`} data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={winster} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={Bestseller} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={Sale} className="d-block w-100" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <br />
      <br />

      {/* Youtube Video */}
      <h2 className={homestyle.videoTitle}>VINES TO YOUR BOTTLE OF WINE</h2>
      <div className="container">
        <iframe
          width="900"
          height="400"
          src="https://www.youtube.com/embed/0SJhcXVSbE8?si=gETzF9gYjCjLYgBz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <br />

      {/* Selection */}
      <div id="portfolio" className={homestyle.portfolio}>
        <div className="container">
          <h1 className={`sub-title ${homestyle.subTitle}`}><b>OUR RANGES</b></h1>
          <div className={homestyle.workList}>
            <div className={homestyle.work}>
              <img src={Rasa} alt="RASA" />
              <div className={homestyle.layer}>
                <h3><b>RASA</b></h3>
                <p><b>The RASA concept for wines has been created with the idea to produce, through artisan winemaking and very selective triage, the best red wines India has ever made.</b></p>
              </div>
            </div>
            <div className={homestyle.work}>
              <img src={Dindori} alt="DINDORI" />
              <div className={homestyle.layer}>
                <h3><b>DINDORI</b></h3>
                <p>Sula's Dindori Reserve highlights our winemakers and their endeavors, using their winemaking skills and tools as artisans with Shiraz, Viognier and most recently Chardonnay.</p>
              </div>
            </div>
            <div className={homestyle.work}>
              <img src={Thesource} alt="THE SOURCE" />
              <div className={homestyle.layer}>
                <h3><b>THE SOURCE</b></h3>
                <p>With 'The Source' wine portfolio, Sula has focused on select vineyard sites, crafting memorable and tasty Sauvignon Blanc and Grenache Rose. Wines made for 'The Source' are made with craftsmanship. The Sauvignon Blanc is aged in French Oak barrels texture and elegance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Products */}
      <h2 className={homestyle.demoTitle}>Our Vine De Table</h2>
      <div className="row">
        {/* Product 1 */}
        <div className={`card col-md-3 ${homestyle.card}`}>
          <img src={Syrah} className="img-fluid" alt="RASA SYRAH" />
          <h3>RASA SYRAH</h3>
          <h6><i>FLAVOURS: Dark and red berries, vanilla, mocha, spices</i></h6>
          <p><strong><span style={{ color: 'rgb(247, 5, 5)', textDecoration: 'line-through', opacity: 0.5 }}>₹ 13,000</span>&nbsp;&nbsp;&nbsp;₹ 12,100</strong></p>
          <a href="#"><i className="fa-regular fa-heart" style={{ marginRight: '200px' }}></i><i className="fa-solid fa-share-nodes"></i></a>
          
          <button className={`btn btn-primary ${homestyle.addToCart}`}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
        {/* Product 2 */}
        <div className={`card col-md-3 ${homestyle.card}`}>
          <img src={Grenache} className="img-fluid" alt="GRENACHE" />
          <h3>THE SOURCE GRENACHE ROSÉ</h3>
          <h6><i>Flavours: Citrus, tropical fruits and white peach</i></h6>
          <p><strong><span style={{ color: 'rgb(247, 5, 5)', textDecoration: 'line-through', opacity: 0.5 }}>₹ 13,400</span>&nbsp;&nbsp;&nbsp;₹ 12,400</strong></p>
          <a href="#"><i className="fa-regular fa-heart" style={{ marginRight: '200px' }}></i><i className="fa-solid fa-share-nodes"></i></a>
          
          <button className={`btn btn-primary ${homestyle.addToCart}`}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
        {/* Product 3 */}
        <div className={`card col-md-3 ${homestyle.card}`}>
          <img src={Viognier} className="img-fluid" alt="VIOGNIER" />
          <h3>DINDORI RESERVE VIOGNIER</h3>
          <h6><i>Flavours: Apricot, Peach, Lychee</i></h6>
          <p><strong><span style={{ color: 'rgb(247, 5, 5)', textDecoration: 'line-through', opacity: 0.5 }}>₹ 13,900</span>&nbsp;&nbsp;&nbsp;₹ 12,900</strong></p>
          <a href="#"><i className="fa-regular fa-heart" style={{ marginRight: '200px' }}></i><i className="fa-solid fa-share-nodes"></i></a>
          
          <button className={`btn btn-primary ${homestyle.addToCart}`}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
        {/* Product 4 */}
        <div className={`card col-md-3 ${homestyle.card}`}>
          <img src={Brut} className="img-fluid" alt="VIOGNIER" />
          <h3>SULA BRUT</h3>
          <h6><i>Flavours: Aromas of apples & pears</i></h6>
          <p><strong><span style={{ color: 'rgb(247, 5, 5)', textDecoration: 'line-through', opacity: 0.5 }}>₹ 14,500</span>&nbsp;&nbsp;&nbsp;₹ 13,500</strong></p>
          <a href="#"><i className="fa-regular fa-heart" style={{ marginRight: '200px' }}></i><i className="fa-solid fa-share-nodes"></i></a>
          
          <button className={`btn btn-primary ${homestyle.addToCart}`}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
        {/* Product 5 */}
        <div className={`card col-md-3 ${homestyle.card}`}>
          <img src={Shiraz} className="img-fluid" alt="VIOGNIER" />
          <h3>SULA SPARKLING SHIRAZ</h3>
          <h6><i>Flavours: Pomegranate, dark berries, spices,smoke.</i></h6>
          <p><strong><span style={{ color: 'rgb(247, 5, 5)', textDecoration: 'line-through', opacity: 0.5 }}>₹ 14,600</span>&nbsp;&nbsp;&nbsp;₹ 13,600</strong></p>
          <a href="#"><i className="fa-regular fa-heart" style={{ marginRight: '200px' }}></i><i className="fa-solid fa-share-nodes"></i></a>
          
          <button className={`btn btn-primary ${homestyle.addToCart}`}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
        {/* Product 6 */}
        <div className={`card col-md-3 ${homestyle.card}`}>
          <img src={Zinfadel} className="img-fluid" alt="VIOGNIER" />
          <h3>SULA ZINFADEL ROSE</h3>
          <h6><i>Flavours: Intense notes of citrus, cranberry & ripe fruits.</i></h6>
          <p><strong><span style={{ color: 'rgb(247, 5, 5)', textDecoration: 'line-through', opacity: 0.5 }}>₹ 14,700</span>&nbsp;&nbsp;&nbsp;₹ 13,700</strong></p>
          <a href="#"><i className="fa-regular fa-heart" style={{ marginRight: '200px' }}></i><i className="fa-solid fa-share-nodes"></i></a>
          
          <button className={`btn btn-primary ${homestyle.addToCart}`}><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
        {/* Repeat similar structure for other products */}
      </div>
      <div className={homestyle.buttonContainer}>
        <a href="/productlisting">
          <button className={`btn btn-primary ${homestyle.viewMore}`}>
            <i className="fa-solid fa-eye" style={{ color: '#370617' }}></i> View More
          </button>
        </a>
      </div>
      <br></br>
    </div>
  );
};

export default Home;
