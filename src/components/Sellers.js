import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sellers } from "../data";

function Sellers() {
    const sellerArr = Object.values(sellers);
    return (
        <div>
            {sellerArr.map(seller => {
                return (
                    <div>
                        <img src={seller.avatarSrc} alt="" />
                        <h2>{seller.storeName}</h2>
                        <p>{seller.description}</p>
                        <p>
                            Maintained by <span>{seller.id}</span>
                        </p>
                        <Link to={"/sellers/" + seller.id}>
                            {" "}
                            Visit their shop!{" "}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Sellers;
