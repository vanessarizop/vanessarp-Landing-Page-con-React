import React from "react";

export const Card= (props) =>{
    return(
     <>
     
<div className="card  d-inline-flex text-center m-2" style={{ width: "21rem" }} >
 
  <img src={props.img} className="card-img-top  " alt="..."/>
   <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5>
    <p className="card-text text-justify  " >{props.info}</p>
    <a href={props.url}  className="btn btn-primary text-center d-grid mx-4 ">{props.boton}</a>
  </div>
</div>

</>

    )
};
