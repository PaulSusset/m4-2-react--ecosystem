import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { items } from '../data'

function Fruit({ item }) {
    const FruitBox = styled(Link)`
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 7px;
        box-shadow: 5px 10px 10px #888888;
        margin: 20px;
        text-decoration: none;
        color: black;
        transition: ease-in-out 0.3s;
        background: whitesmoke;

        &:hover {
            transform: scale(1.05);
        }
    `;
    const Fruit = styled.div`
        font-size: 1.2rem;
        font-weight: bold;
    `;
    const LatinFruit = styled.div`
        font-style: italic;
        font-size: 0.7rem;
    `;
    const StyledImg = styled.img`
        height: 200px;
        width: 200px
        border-radius: 7px;
    `;
    return (
        <FruitBox to={"/items/" + item.id}>
            <StyledImg src={item.imageSrc} />
            <Fruit>{item.name}</Fruit>
            <LatinFruit>{item.latinName}</LatinFruit>
        </FruitBox>
    );
}

export default Fruit;
