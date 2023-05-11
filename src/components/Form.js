import React, { useRef } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { newCountry } from "../redux/Slices/CountriesSlice";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const flagsRef = useRef(); 
  const nameRef = useRef(); 
  const mapsRef = useRef();
  const regionRef = useRef(); 
  const capitalRef = useRef();
  const populationRef = useRef();
  const timezonesRef = useRef();  

  const handleSubmit = (event) => {
    event.preventDefault();
    const flags = flagsRef.current.value; 
      const name = nameRef.current.value;
      const maps = mapsRef.current.value;
      const region = regionRef.current.value; 
      const capital = capitalRef.current.value; 
      const population = populationRef.current.value; 
      const timezones = timezonesRef.current.value; 

    const newCountryData = {flags, name, maps, region, capital, population, timezones};

    dispatch( newCountry(newCountryData) );

    navigate('/');
  };

    return (
        <>
        <div className='container'>
        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">Name</label>
            <input type="text" className="form-control" id="validationDefault01" required ref={nameRef} />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label"> GoogleMaps URL </label>
            <input type="url" className="form-control"  id="validationDefault02"  placeholder='http://' ref={mapsRef} />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault03" className="form-label"> Image flag URL </label>
            <input type="url" className="form-control"  id="validationDefault03"  placeholder='http://' ref={flagsRef} />
          </div>
  
          <div className="col-md-6">
            <label htmlFor="validationDefault04" className="form-label"> Region </label>
            <input type="text" className="form-control" id="validationDefault04"  ref={regionRef} />
          </div>
  
          <div className="col-md-6">
            <label htmlFor="validationDefault05" className="form-label"> Capital </label>
            <input type="text" className="form-control" id="validationDefault05"  ref={capitalRef} />
          </div>

          <div className="col-md-6">
            <label htmlFor="validationDefault06" className="form-label"> Population </label>
            <input type="text" className="form-control" id="validationDefault06"  ref={populationRef} />
          </div>

          <div className="col-md-6">
            <label htmlFor="validationDefault07" className="form-label"> Time zones </label>
            <input type="text" className="form-control" id="validationDefault07"  ref={timezonesRef} />
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit"> Submit </button>
          </div>
          
        </form>
        </div> 
      </>
    )
}