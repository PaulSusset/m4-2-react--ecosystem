import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "nav-item-active";

function Header() {
    const StyledNav = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid;
        black h1 {
            font-size: 3rem;
            padding: 15px;
        }
    `;
    const StyledLink = styled(NavLink).attrs({ activeClassName })`
        text-decoration: none;
        padding: 15px;
        color: grey;
        &.${activeClassName} {
            text-decoration: underline;
        }
    `;
    return (
        <StyledNav className="navBar">
            <h1>The Fruit Emporium </h1>
            <div>
                <StyledLink exact to="/">
                    Home
                </StyledLink>
                <StyledLink to="/Sellers">Sellers</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </div>
        </StyledNav>
    );
}

export default Header;
