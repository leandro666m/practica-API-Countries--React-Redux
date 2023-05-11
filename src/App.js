import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCountries } from "./redux/Slices/CountriesSlice";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormSubmit from "./pages/FormSubmit";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/lang/spanish")
      .then((response) => {
        dispatch( loadCountries(response.data) );
      })
      .catch();
  });


  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/form"} element={<FormSubmit />}></Route>
      </Routes>
    </>
  );
}

export default App;
