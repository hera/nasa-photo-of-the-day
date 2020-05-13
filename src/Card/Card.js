import React, { useState } from "react";
import "./Card.css";


function Card (props) {
    const {date, explanation, url, hdurl, title} = props.nasaData;

    return (
        <div>
            <h1>{ title }</h1>
            <p>
                <a href={ hdurl }>
                    <img src={ url } alt={ title } />
                </a>
            </p>
            <p className="date">Posted: { date }</p>
            <p>{ explanation }</p>
        </div>
    );
}

export default Card;