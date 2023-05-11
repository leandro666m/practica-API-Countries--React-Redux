import React from "react";
import { useSelector } from "react-redux";
import './styles/Footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
  let about = useSelector( (store) => store.countries.about )
  return (
    <>
      <footer className="text-center" >
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold"> <a href="#!" className=""> About us </a> </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold"> <Link to={"/form"} className=""> Submit you country </Link> </h6>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p> {about} </p>
              </div>
            </div>
          </section>

        </div>

        <div className="text-center p-3"  >
          © 2023 Copyleft: 
          <a className="text-white" href="https://www.linkedin.com/in/leandrojmartinez/" target="_blank" rel="noreferrer">Leandro J Martinez </a>
        </div>
      </footer>
    </>
  );
}
