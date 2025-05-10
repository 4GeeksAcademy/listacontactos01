import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard'
import { useEffect, useState } from 'react';
import nombreAgenda from './../variables'

const Contact = () => {


    const [lstContactos,setLstContactos] = useState([]);
    const slug = nombreAgenda;


    const obtenerContactos = () => {
        fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts', {
			method: "GET"
		})
		.then(resp => {
			return resp.json();
		})
		.then(data => {

			let contactosApi = [];
			data.contacts.map((item)=>{
				contactosApi.push(item);
			});
			
			setLstContactos(contactosApi);


		})
		.catch(error => {
			// Manejo de errores
			console.log(error);
		});
    }

    const eliminarContacto = (paramId) => {

        let confirmar = confirm('¿Estas seguro de eliminar?');

        if(confirmar){
            fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + paramId, {
                method: "DELETE"
            })
            .then(resp => {
                return resp;
            })
            .then(data => {

                const listaNueva = lstContactos.filter(x => x.id != paramId);
  
                setLstContactos(listaNueva);

            })
            .catch(error => {
                // Manejo de errores
                console.log(error);
            });
        }

        
    }

    useEffect(()=>{
        obtenerContactos();
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    
                    <Link to="/addContact">
                        <button className="btn btn-success" >add new contact</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>agenda-{slug}</h1>
                </div>
            </div>
            <div className="mt-4">
               
                
                {
                    lstContactos.map((item)=>{
                        return <ContactCard informacion={item} funcionalidad={eliminarContacto} key={item.id}/>
                    })
                }
                
            </div>
            
        </div>
    )
}

export default Contact;