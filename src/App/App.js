import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 30px #ddd;
    border-radius: 10px;
`

function App() {
    let [nasaData, setNasaData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/data.json')
            .then((request) => {
                setNasaData(request.data);
            })
            .catch((error) => {
                console.warn('Could not download');
            })
    }, []);

    if (nasaData) {
        return (
            <Container>
                <Card nasaData={nasaData} />
            </Container>
        );
    } else {
        return (
            <Container>
                <h2>Loading...</h2>
            </Container>
        );
    }
}

export default App;
