import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const FruitImg = styled.img`
    width: 45%;
    height: 45%;
    border-radius: 15px;
    margin-right: 10%;
`;
const InfoBox = styled.div`
    width: 45%;
`;
const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
        font-size: 3rem;
        font-weight: bolder;
        margin: 0;
    }
    p {
        font-style: italic;
        color: grey;
        margin: 0;
    }
`;
const BigBox = styled.div`
    display: flex;
    padding: 100px;
`;
const Descr = styled.p`
    font-size: 1.2rem;
    /* font-weight: bold; */
`;
const Origin = styled.div`
    font-style: italic;
    font-size: 1.2rem;
    span {
        font-weight: bolder;
    }
`;
const StyledButton = styled.button`
    box-sizing: border-box;
    width: 100%;
    background: blue;
    color: white;
    font-size: 2rem;
    border-radius: 10px;
    padding: 20px 50px;
    margin: 25px 0;
`;
const Seller = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 14px;
    }
    p {
        font-size: 1.2rem;
        span {
            font-weight: bolder;
        }
    }
`;
function ItemDetails() {
    const cost = Math.ceil(Math.random() * 10);
    const { itemId } = useParams();
    const fruit = items[itemId];
    const seller = sellers[fruit.sellerId];
    console.log(itemId);
    return (
        <BigBox>
            <FruitImg src={fruit.imageSrc} alt="" />
            <InfoBox>
                <NameBox>
                    <h2>{fruit.name}</h2>
                    <p>{fruit.latinName}</p>
                </NameBox>
                <Descr>{fruit.description}</Descr>
                <Origin>
                    Product of <span>{fruit.countryOfOrigin}</span>
                </Origin>
                <StyledButton>${cost} - Buy now</StyledButton>
                <Seller>
                    <img src={seller.avatarSrc} alt="" />
                    <p>
                        Sold by <span>{seller.storeName}</span>
                    </p>
                </Seller>
            </InfoBox>
        </BigBox>
    );
}

export default ItemDetails;
