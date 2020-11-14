import React from 'react';

const Contact = () => {
  return (
    <section className="colorlib-contact" data-section="contact">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Coordonnées</span>
            <h2 className="colorlib-heading">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div
              className="colorlib-feature colorlib-feature-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="colorlib-icon">
                <i className="icon-globe-outline"></i>
              </div>
              <div className="colorlib-text">
                <p>
                  <a href="#">dioum2touba@gmail.com</a><br />
                  <a href="#">serignesaliou.dioum@ucad.edu.sn</a>
                </p>
              </div>
            </div>

            <div
              className="colorlib-feature colorlib-feature-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="colorlib-icon">
                <i className="icon-map"></i>
              </div>
              <div className="colorlib-text">
                <p>Sipres 1, Dakar, Sénégal</p>
              </div>
            </div>

            <div
              className="colorlib-feature colorlib-feature-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="colorlib-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="colorlib-text">
                <p>
                  <a href="tel://">+221 77 279 62 45 <br />+221  76 188 35 12</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-md-push-1">
            <div className="row">
              <div
                className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                data-animate-effect="fadeInRight"
              >
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nom"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sujet"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary btn-send-message"
                      value="Envoyer Message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
