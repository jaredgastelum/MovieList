import React from 'react';
import Joel from './JoelHiltonHeadshot.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="wrapper">
      <div className="parallax filter-gradient blue" data-color="blue">
        <div className="parallax-background">
          {/* <img
            className="parallax-background-image"
            src="~/img/template/bg3.jpg"
          /> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 hidden-xs">
              <div className="parallax-image">
                <img
                  className=""
                  src={Joel}
                  style={{
                    height: '250px',
                    border: '2px solid lightblue',
                    borderRadius: '25px',
                  }}
                  alt="Joel"
                />
              </div>
            </div>
            <div className="col-md-6 col-md-offset-1">
              <div className="description">
                <h2>WELCOME.</h2>
                <br />
                <h5>
                  Have you ever wondered what movies Joel Hilton has in his film
                  collection? Well, today is your luck day because you're about
                  to find out!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- WEBSITE OVERVIEW--> */}
      <div className="section section-gray section-clients">
        <div className="container text-center">
          <h4 className="header-text">Website Overview</h4>
          <p>
            This website will give you a link to my weekly movie review podcasts
            and you will have the ability to add movies to my movie directory. I
            hope you enjoy looking around.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
