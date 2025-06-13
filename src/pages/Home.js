import React from 'react';
import EventCard from '../components/EventCard'; // adjust the path if needed
import AboutFestava from '../components/AboutFestava';
import MeetArtist from '../components/MeetArtist';
import Form from '../components/Form';
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
      <AboutFestava />
      <MeetArtist />
      <section className="schedule-section section-padding" id="section_4">
        <div className="container ">
          <div className="row justify-content-center">

            <div className="col-12 text-center">
              <h2 className="mb-4 text-white">Upcoming Events</h2>
            </div>

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
        </div>

      </section >
      <Form />
    </>
  );

}

export default Home;
