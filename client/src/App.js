import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import search from "./pages/search";
import saved from "./pages/saved";
import NoMatch from "./pages/NoMatch";
import Navbars from "./components/Nav";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div>
          <Navbars />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={search} />
            <Route exact path="/saved" component={saved} />
            <Route exact path="/saved/:id" component={saved} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
