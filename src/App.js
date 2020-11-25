import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "../src/components/movies";
import MovieForm from "./components/movieForm";
import Customers from "../src/components/customers";
import Rentals from "../src/components/rentals";
import NotFound from "../src/components/notFound";
import MainNav from "./components/common/mainNav";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
//import MovieAdd from "./components/common/movieAdd";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <MainNav />
      <main className="container">
        <Switch>
          <Route path="/registerForm" component={RegisterForm} />
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
