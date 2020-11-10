import React from 'react';
import './Home.css';
import image_1 from '../../assets/images/image_1.jpeg';
import image_2 from '../../assets/images/image_2.jpg';

const Home = () => {
  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li style={{ backgroundImage: `url(${image_1})` }}>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1>
                        Hi! <br />
                        I'm Jackson
                      </h1>
                      <h2>
                        100% html5 bootstrap templates Made by{' '}
                        <a href="https://colorlib.com/" target="_blank">
                          colorlib.com
                        </a>
                      </h2>
                      <p>
                        <a className="btn btn-primary btn-learn">
                          Download CV <i className="icon-download4"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ backgroundImage: `url(${image_2})` }}>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>
                        I am <br />a Designer
                      </h1>
                      <h2>
                        100% html5 bootstrap templates Made by{' '}
                        <a href="https://colorlib.com/" target="_blank">
                          colorlib.com
                        </a>
                      </h2>
                      <p>
                        <a className="btn btn-primary btn-learn">
                          View Portfolio <i className="icon-briefcase3"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;