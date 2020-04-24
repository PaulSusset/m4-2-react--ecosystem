import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";
import Sellers from "./Sellers";
import SellerPage from "./SellerPage";

function App(props) {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact={true} path="/">
                        <Homepage />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/items/:itemId">
                        <ItemDetails />
                    </Route>
                    <Route exact path="/sellers">
                        <Sellers />
                    </Route>
                    <Route path="/sellers/:sellerId">
                        <SellerPage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
