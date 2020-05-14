import React from "react";
import styled from 'styled-components';
import Button from '../Button/Button';

const CardImage = styled.div`
    background-color: white;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    img {
        width: 100%;
        margin: 0;
        padding: 0;
        transition: transform 1s;
    }
    img:hover {
        transform: scale(1.2);
        
    }
`

const CardDescription = styled.div`
    background-color: white;
    padding: 50px;
    border: 1px solid #ddd;
    border-top: 0;
    border-radius: 0 0 10px 10px;
`


function Card (props) {
    const {date, explanation, url, hdurl, title} = props.nasaData;

    return (
        <>
            <CardImage>
                <a href={ hdurl }>
                    <img src={ url } alt={ title } />
                </a>
            </CardImage>
            <CardDescription>
                <h1>{ title }</h1>
                <p className="date">Posted: { date }</p>
                <p>{ explanation }</p>
                <p>
                    <Button href={ hdurl }>View the picture</Button>
                </p>
            </CardDescription>
        </>
    );
}

export default Card;