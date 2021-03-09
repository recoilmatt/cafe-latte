import React from "react";

//Components
import Home from "./pages/Home";
import HeaderTest from "./components/HeaderTest";
/* import Footer from "./Footer"; */
import FooterTest from "./components/FooterTest";

//Pages
import Menu from "./pages/Menu";
import LocationsSection from "./pages/LocationsSection";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Auth Pages
import Signup from "./auth/Signup";
import Dashboard from "./auth/Dashboard";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";

//DataProvider
import DataProvider from "./components/DataProvider";

//Scrollbars
import { Scrollbars } from "react-custom-scrollbars";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App2() {
  return (
    <DataProvider>
      <Router>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: "100vw", height: "100vh" }}
        >
          <HeaderTest />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/products/:id" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/menu" component={Menu} />
            <Route path="/locations" component={LocationsSection} />
          </Switch>

          <FooterTest />
        </Scrollbars>
      </Router>
    </DataProvider>
  );
}

export default App2;
