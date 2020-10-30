import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import AddMovie from "./components/AddMovie";
import BookingPage from "./components/BookingPage";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Header />
      <main>
        <Switch>
          <Route path="/booking-page/add-movie">
            <AddMovie />
          </Route>
          <Route path="/booking-page/:movieId">
            <BookingPage />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </main>
      <footer className="footer">Copyright @ 2020 Book My Show</footer>
    </Router>
  </React.StrictMode>,
  rootElement
);
