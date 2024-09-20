import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img 
                className= "card-img" 
                src={`images/${props.travel.img}`} 
                alt="card-picture" 
            />
            <div className="card-info">
                <div className="card-location-info">
                    <svg className="card-location-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#F55A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#F55A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="card-location">{props.travel.location.toUpperCase()}</p>
                    <a href={props.travel.maps_url} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.travel.title}</h2>
                <p className="card-dates">{props.travel.dates}</p>
                <p className="card-description">{props.travel.description}</p>
            </div>
        </div>
    )
}