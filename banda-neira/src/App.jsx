import { useState } from 'react';
import backgroundImage from './assets/background.jpg';
import './App.css';
import './index.css';
import './Responsive.css';
import './bootstrap.min.css';
import './assets/vendors/jquery-ui/jquery-ui.css';
import './assets/vendors/fontawesome/css/all.min.css';
import './assets/vendors/wostin-icons/style.css';
import './assets/vendors/timepicker/timePicker.css';
import './assets/vendors/jquery/jquery-3.6.0.min.js';
import './assets/vendors/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendors/timepicker/timePicker.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <style>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
      <div className="main-slider main-slider-three">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": false,
            "effect": "fade",
            "pagination": {
              "el": "#main-slider-pagination",
              "type": "bullets",
              "clickable": true
            },
            "navigation": {
              "nextEl": "#main-slider__swiper-button-next",
              "prevEl": "#main-slider__swiper-button-prev"
            },
            "autoplay": {
              "delay": 5000
            }}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="main-slider-three-bg"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  width: '100%', // Adjusted to fill the entire width
                  height: '100vh', // Adjusted to fill the entire viewport height
                }}
              ></div>
              <div className="main-slider-three-building">
                <img src="assets/images/resources/main-slider-three-building.png" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="main-slider__content">
                      <h5>Mari olah sampahmu bersama kami!</h5>
                      <h3>Bangun dunia yang bebas sampah bersama Olah Sampah</h3>
                      <p>Mulailah dengan gerakan kecil seperti mendaur ulangkan sampah untuk menjaga ekosistem dan lingkungan kita</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-one">
        <div className="container">
          <div className="feature-one__inner">
            <ul className="list-unstyled feature-one__list">
              <li className="feature-one__single wow fadeInUp" data-wow-delay="100ms">
                <div className="feature-one__icon">
                  <span className="icon-budget"></span>
                </div>
                <h3 className="feature-one__title "><a href="about.html">Pengelolaan</a></h3>
              </li>
              <li className="feature-one__single wow fadeInUp" data-wow-delay="200ms">
                <div className="feature-one__icon">
                  <span className="icon-calendar"></span>
                </div>
                <h3 className="feature-one__title "><a href="about.html">Insentif Poin</a></h3>
              </li>
              <li className="feature-one__single wow fadeInUp" data-wow-delay="300ms">
                <div className="feature-one__icon">
                  <span className="icon-garbage"></span>
                </div>
                <h3 className="feature-one__title "><a href="about.html">Komunitas</a></h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="welcome" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline"></span>
                  <h2 className="section-title__title">Insentif Poin Untuk Praktik Ramah Lingkungan</h2>
                </div>
                <p className="welcome__text-2">Konsep yang dapat membawa perubahan positif dalam pengelolaan sampah dan pelestarian lingkungan. Dengan memberikan poin kepada individu yang berpartisipasi dalam praktik ramah lingkungan. Ini adalah langkah yang inovatif dan efektif untuk memotivasi individu dan komunitas dalam upaya melindungi planet kita.</p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome__left">
                <div>
                  <div className="welcome__img">
                    <img src="assets/images/resources/cash.jpeg" alt="" style={{ height: '390px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '70px' }}>
            <div className="col-xl-6">
              <div className="welcome__left">
                <div>
                  <div className="welcome__img">
                    <img src="assets/fdesign/9.jpeg" alt="" style={{ height: '390px' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline"></span>
                  <h2 className="section-title__title">Dukungan Perubahan Perilaku Yang Positif</h2>
                </div>
                <p className="welcome__text-2">Gabungkan kesadaran lingkungan dengan insentif poin yang menggiurkan, dan saksikan bagaimana perubahan kecil dalam gaya hidup Anda, seperti mengurangi penggunaan plastik sekali pakai atau bersepeda ke tempat kerja, dapat menghasilkan dampak besar bagi lingkungan dan kesejahteraan Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
