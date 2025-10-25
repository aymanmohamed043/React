// src/components/Card.jsx
import React from "react";
import marker from "../assets/images/marker.png"; // <-- correct import for Vite/React

function Card(props) {
  return (
    <div className="card-item">
      <div className="main-image-container">
        {/* use a real URL or import the image similarly */}
        <img
          className="card-image"
          src={props.img}
          alt={`photo of ${props.placeName} place`}
        />
      </div>

      <div className="card-content">
        <div className="location-info">
          <div className="location-marker">
            <img className="marker" src={marker} alt="location-marker" />
            <span className="country">{props.country}</span>
            <a
              className="map-link"
              href={props.mapLink}
              target="_blank"
              rel="noreferrer"
            >
              View on Google Map
            </a>
          </div>
        </div>

        <div className="card-header">
          <h1>{props.placeName}</h1>
        </div>

        <div className="card-footer">
          <p className="date">{props.date}</p>
          <p className="text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
