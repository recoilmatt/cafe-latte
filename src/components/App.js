import React from "react";

//Components
import Home from "../pages/Home";
import Header from "./Header";
/* import Footer from "./Footer"; */
import FooterTest from "./FooterTest";

//Pages
import Menu from "../pages/Menu";
import LocationsSection from "../pages/LocationsSection";
import Details from "../pages/Details";
import Cart from "../pages/Cart";

//Context
import { AuthProvider } from "../contexts/AuthContext";

//React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

//Auth Pages
import Signup from "../auth/Signup";
import Dashboard from "../auth/Dashboard";
import Login from "../auth/Login";
import PrivateRoute from "../auth/PrivateRoute";
import ForgotPassword from "../auth/ForgotPassword";
import UpdateProfile from "../auth/UpdateProfile";

//DataProvider
import DataProvider from "./DataProvider";

//Scrollbars
import { Scrollbars } from "react-custom-scrollbars";

//Css Transition
import { TransitionGroup, CSSTransition } from "react-transition-group";

//Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={0}>
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
    </CSSTransition>
  </TransitionGroup>
));

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            style={{ width: "100vw", height: "100vh" }}
          >
            <Header />
            <AnimatedSwitch />
            <FooterTest />
          </Scrollbars>
        </Router>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
