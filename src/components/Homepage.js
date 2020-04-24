import React from "react";
// import styled from 'styled-components'
import { items } from "../data";

import ListingGrid from "./ListingGrid";

function Homepage() {
    return (
        <div>
            <h2>
                Fruit emporium sells the finest fruits from this world and
                beyond.
            </h2>
            <h3>Browse items:</h3>
            <ListingGrid itemList={Object.values(items)} />
        </div>
    );
}

export default Homepage;
