import React, { useState } from "react";
import "./Card.css";


function Card (props) {
    const {date, explanation, url, hdurl, title} = props.nasaData;

    return (
        <>
        <div className="image">
            <a href={ hdurl }>
                <img src={ url } alt={ title } />
            </a>
        </div>
        <div className="description">
            <h1>{ title }</h1>
            <p className="date">Posted: { date }</p>
            <p>{ explanation }</p>
        </div>
        </>
    );
}

export default Card;