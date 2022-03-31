import React from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import Contact from "./views/Contact";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

const App = () => {

  // * Goal 1: Set up routing in this app...
  // The user can navigate between a Home "page" and a Contact "page"

  return (
    <>
      {/* The <Router> is used by React Router to manage all our routes */}
      <Router>

        <Header />

        {/* 
        Using <Switch> tells the Router to STOP evaluating the path once a match is found
        Every <Route> between the <Switch> tags will be evaluated to find the path the user navigated to
        ... but everything outside the <Switch> tags (above or below) will ALWAYS be rendered
        So the <Header /> component will always be rendered when the <App /> component renders. :-)
        */}
        <Switch>

          {/* Route 1 - The <Home /> component */}
          {/* www.mywebsite.com/ */}
          {/* 
          Note: Before adding the "exact" prop, we were "filtering" our <Route>s...
          The <Home /> component would be rendered if the path STARTED with "/".
          We made the path more specific by adding the "exact" prop...
          So the <Home /> component will now render ONLY when the path is exactly "/", not when it starts with a "/".
          */}
          <Route path="/" exact>
            <Home />
          </Route>

          {/* Route 2 - The <Contact /> component */}
          {/* www.mywebsite.com/contact */}
          <Route path="/contact">
            <Contact />
          </Route>

          {/* 
          When the user tries to navigate to a particular path, the Router will check all the Routes above...
          If none support the path entered by the user, we can "redirect" them to a default path
          */}
          <Redirect to="/" />

        </Switch>

      </Router>
    </>
  );
}

export default App;