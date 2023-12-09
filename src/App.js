import { Fragment } from "react";
import "./App.css";
import Navbars from "./Components/Nav/Navbar";
import Home from "./pages/Home";
import Foooter from "./Components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Navbars />
      <Home />
      <Foooter></Foooter>
    </Fragment>
  );
}

export default App;
