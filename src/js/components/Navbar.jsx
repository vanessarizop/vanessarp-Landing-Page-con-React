import React from "react";

export const Navbar =()=> {
    return(
        <>
 
<div className=" d-flex justify-content-between   text-light bg-dark  align-items-center " ><h5>Viajes</h5>
  <ul className="nav justify-content-end ">
  <li className="nav-item">
    <a className="nav-link active fw-bold text-light" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="#">Contact</a>
  </li>
</ul>
</div>
</>
    )
};

