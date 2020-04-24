import React from "react";
import styled from "styled-components";

function About() {
    const StyledDiv = styled.div`
        margin: 40px;
        padding: 25px;
        border: 1px solid grey;
        h2 {
            font-size: 1.8rem;
            text-align: center;
        }
        p {
            padding: 10px 50px;
        }
    `;
    return (
        <StyledDiv>
            <h2>
                Fruit emporium is founded on a very simple principle: Fruit is
                good.
            </h2>
            <p>
                We carry the finest selection of produce from around the world,
                from tart citrus to sweet cherries. Our sellers are world-class,
                and y is guaranteed to be worthy of auction in Asian markets.
            </p>
        </StyledDiv>
    );
}

export default About;
