import React from "react";

export const Card= (props) =>{
    return(
     <>
     
<div className="card d-inline-flex m-3 " style={{ width: "20rem", height:"40rem" }} >
  <img src={props.img} className="card-img-top img-fluid" alt="..."/>
   <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5>
    <p className="card-text text-justify  " >{props.info}</p>
    <a href={props.url}  className="btn btn-primary text-center d-grid mx-4 ">{props.boton}</a>
  </div>
</div>

</>

    )
};
