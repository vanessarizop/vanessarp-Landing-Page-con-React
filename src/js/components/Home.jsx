import React from "react";


import { Card } from "./Card.jsx";
//create your first component
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";


let viajes = [
	{
		nombre: "Destinos Destacados",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate tempus accumsan. Vestibulum posuere tempus sapien quis auctor. .Integer sed turpis sed nulla. Vestibulum posuere tempus sapien quis auctor.",
		img: "https://content-viajes.nationalgeographic.com.es/medio/2017/04/24/bali-indonesia_5ae3dbfe.jpg",
		url: "https://viajes.nationalgeographic.com.es/a/destinos-mas-populares_11415",
		boton: "Ir a Destinos"
	},
	{
		nombre: "Las Mejores Ciudades para Visitar en Navidad",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate tempus accumsan. Vestibulum posuere tempus sapien quis auctor. Integer sed turpis sed nulla Integer . ",
		img: "https://hips.hearstapps.com/hmg-prod/images/dresden-alemania-navidad-1544180714.jpg?crop=1xw:1xh;center,top",
		url: "https://www.elledecor.com/es/hoteles-restaurantes-planes/g25433209/navidad-destinos-ciudades-viajes/",
		boton: " Conocer ciudades"
	},
	{
		nombre: "Las Ciudades con las Mejores Playas",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate tempus accumsan. Vestibulum posuere tempus sapien quis auctor. .Integer sed turpis sed nulla. Vestibulum posuere tempus sapien quis auctor.",
		img: "https://media.traveler.es/photos/638cc49b8a11d17111b392cf/16:9/w_1600%2Cc_limit/iStock-1424648900.jpg",
		url: "https://www.traveler.es/galerias/mejores-playas-del-mundo-tripadvisor",
		boton: "ir a la web"
	},
	{
		nombre: "Mejores Destinos Turísticos en Verano",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate tempus accumsan. Vestibulum posuere tempus sapien quis auctor. Integer sed turpis sed nulla Integer .",
		img: "https://travel.usnews.com/dims4/USNEWS/c9e626c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/format/webp/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-177187495_45F9W7n.jpg",
		url: "https://travel.usnews.com/rankings/best-summer-vacations/",
		boton: "Mejores Destinos en verano"
	}
]

const Home = () => {
	return (
	
		<div className="container-fluid flex-column">
				
				<div className="row ">
				<Navbar/>
				</div>

				<div className="row d-flex    my-3 mx-3">
				<Jumbotron/>
				</div>
				
				<div className="row d-flex my-3 mx-2 pb-2 ">  
            
				{viajes.map((item, index) => (
					<div className="col-lg-3 col-md-6 col-12" >
                        <Card key={index} nombre={item.nombre}  info={item.info}  img={item.img}  url={item.url}  boton={item.boton} />
					</div>
                ))}
			</div>
			
			<div className="row"> 
       			 <Footer/>
   			 </div>
</div>

	
	);
};
export default Home;