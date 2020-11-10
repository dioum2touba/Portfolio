import React from 'react';
import Navbar from './Navbar';
import About from '../components/About/About';
import Service from '../components/Services/Service';
import Counters from '../components/Home/Counters';
import Skill from '../components/Skills/Skill';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Work from '../components/Work/Work';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import image1 from '../assets/images/image1.jpeg';

const Layout = (props) => {
  return (
    <div className="container-wrap">
      <a
        href="#"
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i></i>
      </a>
      <aside
        id="colorlib-aside"
        role="complementary"
        className="border js-fullheight"
      >
        <div className="text-center">
          <div
            className="author-img"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <h1 id="colorlib-logo">
            <a href="index.html">{props.name}</a>
          </h1>
          <span className="position">
            <a href="#">{props.profession}</a> {props.addres}
          </span>
        </div>
        <Navbar />
        <div className="colorlib-footer">
          <p>
            <small>
              &copy; Copyright{' '}
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved. Made with{' '}
              <i className="icon-heart" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              <span>
                Distributed by{' '}
                <a href="https://themewagon.com" target="_blank">
                  ThemeWagon
                </a>
              </span>{' '}
              <span>
                Demo Images:{' '}
                <a href="https://unsplash.com/" target="_blank">
                  Unsplash.com
                </a>
              </span>
            </small>
          </p>
          <ul>
            <li>
              <a href="#">
                <i className="icon-facebook2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-twitter2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-linkedin2"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div id="colorlib-main">
        {/* <Home /> */}
        <About
          title={props.about.title}
          quisommenous={props.about.quisommenous}
          intro={props.about.intro}
          name={props.about.name}
          presentation1={props.about.presentation1}
          presentation2={props.about.presentation2}
          rows={props.about.rows}
          appreciate={props.about.appreciate}
          Hireme={props.about.Hireme}
        />
        <Service />
        <Counters />
        <Skill />
        <Education />
        <Experience />
        <Work />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
