import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./componenets/Navbar";
import Header from "./componenets/Header";


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}


