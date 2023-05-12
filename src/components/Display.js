import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCountry } from "../redux/Slices/CountriesSlice";
import  "./styles/Display.css";

export default function Display() {

  let countries = useSelector( (store) => store.countries.data);  

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch( deleteCountry(id) );
  };
  useEffect( ()=>{

    console.log( countries[0] );
  }, [countries] )

  return (
    <>
    { countries ?
    <section className="cont">
      { countries.map( (coun, index) => (
          <section className="d-inline-flex p-2" key={index}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img src={coun.flags.png} className="banderita img-fluid rounded-start" alt="..."/>
                  <Link to={`/edit/${coun.name.common}`} className="edit-btn"> <i className="fa-regular fa-pen-to-square"></i></Link>
                  <button onClick={() => handleDelete(coun.name.common)} className="delete-btn"><i className="fa-solid fa-trash-can"></i> </button>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                   <h5 className="card-title"> <a href={coun.maps.googleMaps} target="_blank" rel="noreferrer"> {coun.name.common} </a></h5>
                   <p>Region: {coun.region} </p>
                   <p>Capital: {coun.capital} </p>
                   <p>Population: {coun.population} </p>
                   <p>Time zones: {coun.timezones} </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      ) )
      } 
      
    </section>
     : "" }
    </>
  );
}
