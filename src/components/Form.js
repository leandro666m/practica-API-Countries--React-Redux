import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { editCountry, newCountry } from "../redux/Slices/CountriesSlice";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const countries = useSelector( (state) => state.countries.data);
  const [country, setCountry] = useState( { flags:"", name:"", maps:"",region:"", capital:"", population:"", timezones:"" } );

  const handleChange = (e) => {
    setCountry( {...country, [e.target.name]: e.target.value} );
  };
  const handleSubmit = (event) => {
        event.preventDefault();
    if (params.id) {
      dispatch( editCountry( {...country, name:params.id} ) );
    } else {
     dispatch( newCountry( {...country} ) );
    }
   navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      setCountry( countries.find( (coun) => coun.name.common === params.id) );  }
  }, [params, countries]);

    return (
        <>
        <div className='container'>
        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">Name</label>
            <input type="text" className="form-control" id="validationDefault01" required name="name" onChange={handleChange} value={country.name.common}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label"> GoogleMaps URL </label>
            <input type="url" className="form-control"  id="validationDefault02"  placeholder='http://' name="maps" onChange={handleChange} value={country.maps.googleMaps}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault03" className="form-label"> Image flag URL </label>
            <input type="url" className="form-control"  id="validationDefault03"  placeholder='http://' name="flags" onChange={handleChange} value={country.flags.png}/>
          </div>
  
          <div className="col-md-6">
            <label htmlFor="validationDefault04" className="form-label"> Region </label>
            <input type="text" className="form-control" id="validationDefault04"  name="region" onChange={handleChange} value={country.region}/>
          </div>
  
          <div className="col-md-6">
            <label htmlFor="validationDefault05" className="form-label"> Capital </label>
            <input type="text" className="form-control" id="validationDefault05"  name="capital" onChange={handleChange} value={country.capital}/>
          </div>

          <div className="col-md-6">
            <label htmlFor="validationDefault06" className="form-label"> Population </label>
            <input type="text" className="form-control" id="validationDefault06"  name="population" onChange={handleChange} value={country.population}/>
          </div>

          <div className="col-md-6">
            <label htmlFor="validationDefault07" className="form-label"> Time zones </label>
            <input type="text" className="form-control" id="validationDefault07"  name="timezones" onChange={handleChange} value={country.timezones}/>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit"> Submit </button>
          </div>
          
        </form>
        </div> 
      </>
    )
}