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

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/home" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
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
