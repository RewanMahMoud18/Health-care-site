import { Fragment } from "react";
import "./App.css";
import Navbars from "./Components/Nav/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Navbars />
      <Home />
    </Fragment>
  );
}

export default App;
