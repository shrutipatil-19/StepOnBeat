// src/components/EventCard.js
import React from 'react';

const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="card shadow-lg p-3 mb-4 bg-white rounded">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
