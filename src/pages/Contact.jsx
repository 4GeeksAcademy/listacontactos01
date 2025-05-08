import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard'
import { useEffect, useState } from 'react';

const Contact = () => {


    const [lstContactos,setLstContactos] = useState([]);
    const slug = "carlosagenda1";


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
            <div className="mt-4">
               
                
                {
                    lstContactos.map((item)=>{
                        return <ContactCard informacion={item} key={item.id}/>
                    })
                }
                
            </div>
            
        </div>
    )
}

export default Contact;