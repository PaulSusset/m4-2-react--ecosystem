import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import { items } from '../data'
import Fruit from './Fruit'

function ListingGrid({ itemList }) {
    const FruitStand = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    `
    return (
        <FruitStand>
        {itemList.map((item, index) => {
            return (
                <Fruit item={item} key={index} ></Fruit>
            )
        })}
        </FruitStand>
    );
}

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired
        })
    ).isRequired
};

export default ListingGrid;
