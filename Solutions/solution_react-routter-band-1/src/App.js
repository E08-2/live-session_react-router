import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Band from "./views/Band";
import Ozzy from "./views/Ozzy";
import Tony from "./views/Tony";
import Geezer from "./views/Geezer";
import Bill from "./views/Bill";
import "./App.css";

const App = () => {
    return (
        <div>
            <Router>
                {/* Navigation bar - will always render no matter which route we are using */}
                <Navigation />
                <main>
                    <Switch>
                        {/* Route 1. Band page */}
                        <Route path="/" exact>
                            <Band />
                        </Route>

                        {/* Route 2. Lead singer */}
                        <Route path="/vocals" exact>
                            <Ozzy />
                        </Route>

                        {/* Route 3. Guitar */}
                        <Route path="/guitar" exact>
                            <Tony />
                        </Route>

                        {/* Route 4. Bass */}
                        <Route path="/bass" exact>
                            <Geezer />
                        </Route>

                        {/* Route 5. Drums */}
                        <Route path="/drums" exact>
                            <Bill />
                        </Route>

                        <Redirect to="/" />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default App;