import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "../Card/Card.js";
import axios from 'axios';

function App() {
    let [nasaData, setNasaData] = useState(null);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then((request) => {
                setNasaData(request.data);
            })
            .catch((error) => {
                console.warn('Could not download');
            })
    }, []);

    if (nasaData) {
        return (
            <div className="container"><Card nasaData={nasaData} /></div>
        );
    } else {
        return (
            <div className="container"><h2>Loading...</h2></div>
        );
    }
}

export default App;
