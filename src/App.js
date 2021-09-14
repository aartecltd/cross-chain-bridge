import React, {useState} from "react";
import "tailwindcss/tailwind.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Transfer from "./pages/Transfer";
import Pools from "./pages/Pools";
import Charts from "./pages/Charts";
import ZeroGravity from "./pages/ZeroGravity";
import Layout from "./Components/layout/Layout";
import BuyZero from "./pages/BuyZero";
import More from "./pages/More";

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/swap" component={Swap}/>
                        <Route path="/transfer" component={Transfer}/>
                        <Route path="/pools" component={Pools}/>
                        <Route path="/charts" component={Charts}/>
                        <Route path="/zero-gravity" component={ZeroGravity}/>
                        <Route path="/buy-zero" component={BuyZero}/>
                        <Route path="/more" component={More}/>
                    </Switch>
                </Layout>
            </Router>

        </>
    );
}

export default App;
