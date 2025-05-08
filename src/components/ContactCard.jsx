import { useEffect } from "react";

const ContactCard = (props) => {

    const slug = "carlosagenda1";

    useEffect(()=>{
       
    },[])


    const eliminarContacto = (id) => {
        console.log('eliminando ' + id);

        fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + id, {
			method: "DELETE"
		})
		.then(resp => {
			return resp;
		})
		.then(data => {

		})
		.catch(error => {
			// Manejo de errores
			console.log(error);
		});
    }

    return (
        <div className="row contact">
            <div className="col-12">
                <div className="row p-3">
                    <div className="col-3 d-flex justify-content-center">
                        <img className="imagenContacto" src="https://th.bing.com/th/id/OIP.JBpgUJhTt8cI2V05-Uf53AHaG1?w=218&h=201&c=7&r=0&o=5&pid=1.7" />
                    </div>
                    <div className="col-5">
                        <h6>{props.informacion.name}</h6>
                        <span className="text-muted"><i className="fa-solid fa-location-dot"></i> {props.informacion.address}</span>
                        <br></br>
                        <span className="text-muted"><i className="fa-solid fa-phone-flip"></i> {props.informacion.phone}</span>
                        <br></br>
                        <span className="text-muted"><i className="fa-solid fa-envelope"></i> {props.informacion.email}</span>
                    </div>
                    <div className="col-3">
                    
                        <a href="https://www.google.com/" className="me-4 text-dark"><i className="fa-solid fa-pen"></i></a>
                        <span onClick={()=>eliminarContacto(props.informacion.id)}><i className="fa-solid fa-trash"></i></span>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;