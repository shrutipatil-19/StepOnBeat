import React from 'react';
import EventCard from '../components/EventCard'; // adjust the path if needed

function Home() {
  const events = [
    {
      title: 'Music Fiesta',
      date: 'June 20, 2025',
      description: 'Join us for a night of live performances by top bands.',
      image: '/images/music.jpg',
    },
    {
      title: 'Startup Meetup',
      date: 'July 5, 2025',
      description: 'Network with founders and investors.',
      image: '/images/startup.jpg',
    },
    {
      title: 'Food Carnival',
      date: 'August 12, 2025',
      description: 'Delicious street food and chef competitions.',
      image: '/images/food.jpg',
    },
  ];

  return (
    <>
      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <small>Festava Live Presents</small>
              <h1 className="text-white mb-5">Night Live 2023</h1>
              <a className="btn custom-btn smoothscroll" href="#section_2">Let's begin</a>
            </div>
            <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
              <div className="date-wrap">
                <h5 className="text-white">
                  <i className="custom-icon bi-clock me-2"></i>
                  10 - 12<sup>th</sup>, Dec 2023
                </h5>
              </div>
              <div className="location-wrap mx-auto py-3 py-lg-0">
                <h5 className="text-white">
                  <i className="custom-icon bi-geo-alt me-2"></i>
                  National Center, United States
                </h5>
              </div>
              <div className="social-share">
                <ul className="social-icon d-flex align-items-center justify-content-center">
                  <span className="text-white me-3">Share:</span>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <span className="bi-facebook" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <span className="bi-twitter" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link">
                      <span className="bi-instagram" aria-hidden="true"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video" poster="">
            <source src="/assets/video/pexels-2022395.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="about-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info">
                <h2 className="text-white mb-4">About Festava 2022</h2>
                <p className="text-white">Festava Live is free CSS template provided by TemplateMo website. This layout is built on Bootstrap v5.2.2 CSS library. You are free to use this template for your commercial website.</p>
                <h6 className="text-white mt-4">Once in Lifetime Experience</h6>
                <p className="text-white">You are not allowed to redistribute the template ZIP file on any other website without a permission.</p>
                <h6 className="text-white mt-4">Whole Night Party</h6>
                <p className="text-white">Please tell your friends about our website. Thank you.</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-text-wrap">
                <img src="/assets/images/pexels-alexander-suhorucov-6457579.jpg" className="about-image img-fluid" alt="About Festava" />
                <div className="about-text-info d-flex">
                  <div className="d-flex">
                    <i className="about-text-icon bi-person" aria-hidden="true"></i>
                  </div>
                  <div className="ms-4">
                    <h3>a happy moment</h3>
                    <p className="mb-0">your amazing festival experience with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="artists-section section-padding" id="section_3">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-12 text-center">
              <h2 className="mb-4">Meet Artists</h2>
            </div>

            <div className="col-lg-5 col-12">
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img src="/assets/images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg"
                    className="artists-image img-fluid" />
                </div>

                <div className="artists-hover">
                  <p>
                    <strong>Name:</strong>
                    Madona
                  </p>

                  <p>
                    <strong>Birthdate:</strong>
                    August 16, 1958
                  </p>

                  <p>
                    <strong>Music:</strong>
                    Pop, R&amp;B
                  </p>

                  <hr />

                  <p className="mb-0">
                    <strong>Youtube Channel:</strong>
                    <a href="#">Madona Official</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-12">
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img src="/assets/images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg"
                    className="artists-image img-fluid" />
                </div>

                <div className="artists-hover">
                  <p>
                    <strong>Name:</strong>
                    Rihana
                  </p>

                  <p>
                    <strong>Birthdate:</strong>
                    Feb 20, 1988
                  </p>

                  <p>
                    <strong>Music:</strong>
                    Country
                  </p>

                  <hr />

                  <p className="mb-0">
                    <strong>Youtube Channel:</strong>
                    <a href="#">Rihana Official</a>
                  </p>
                </div>
              </div>

              <div className="artists-thumb">
                <img src="/assets/images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg"
                  className="artists-image img-fluid" />

                <div className="artists-hover">
                  <p>
                    <strong>Name:</strong>
                    Bruno Bros
                  </p>

                  <p>
                    <strong>Birthdate:</strong>
                    October 8, 1985
                  </p>

                  <p>
                    <strong>Music:</strong>
                    Pop
                  </p>

                  <hr />

                  <p className="mb-0">
                    <strong>Youtube Channel:</strong>
                    <a href="#">Bruno Official</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="artists-section section-padding" id="section_4">
        <div className="container py-5">
          <h2 className="mb-4 text-center">Upcoming Events</h2>
          <div className="row">
            {events.map((event, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <EventCard
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  image={event.image}
                />
              </div>
            ))}
          </div>
        </div>

      </section>

    </>
  );

}

export default Home;
