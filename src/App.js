import { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Contact from "./pages/Contact";
import AboutUs from "./Components/AboutUs/Aboutus";
import OurTeam from "./Components/Our Team/OurTeam";
import BookingPage from "./Components/Booking/BookingPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route exact path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/booking" element={<BookingPage />} />\
    </Route>
  )
);
function App() {
  return (
    <Fragment>
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
}

export default App;
