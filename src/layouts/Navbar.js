import React from 'react';

const Navbar = () => {
  return (
    <nav id="colorlib-main-menu" role="navigation" className="navbar">
      <div id="navbar" className="collapse">
        <ul>
          {/* <li class="active"><a href="#" data-nav-section="home">Home</a></li> */}
          <li>
            <a href="#" data-nav-section="about">
              À propos
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="services">
              Outils/Framework
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="skills">
              Mes Compétences
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="experience">
              Expériences/Projets
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="work">
              Conception Graphique
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="education">
              Education
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="blog">
              Blog
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
