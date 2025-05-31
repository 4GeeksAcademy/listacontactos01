import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard'
import { useEffect, useState } from 'react';
import nombreAgenda from './../variables'
import useGlobalReducer from '../hooks/useGlobalReducer';

const Contact = () => {


    const { store, dispatch } = useGlobalReducer();
    const [lstContactos,setLstContactos] = useState([]);
    const slug = nombreAgenda;


    const obtenerContactos = async () => {


        const responseAgenda = await fetch('https://playground.4geeks.com/contact/agendas/carlosagenda1');
        const infoAgenda = await responseAgenda.json();

        if(responseAgenda.status == 404){
            const responseGuardaAgenda = await fetch('https://playground.4geeks.com/contact/agendas/carlosagenda1',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const info = await responseGuardaAgenda.json();
            console.log(info);
        }


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



            console.log('**************iNFO STORE***********');
            console.log(store);

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

                dispatch({ type: 'remove_contacto', payload: { id: paramId } });

                console.log(store);

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