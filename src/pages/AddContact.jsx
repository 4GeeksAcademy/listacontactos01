import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import nombreAgenda from './../variables'

const AddContact = () => {


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    const slug = nombreAgenda;
    const parametros = useParams();
    let [idParametro,setIdParametro] = useState("");


    const guardar = (e) => {
        e.preventDefault();

        if(name == '' ||
            phone == '' || 
            email == '' ||
            address == ''
        ){
            alert('Campos Obligatorios!');
            return;
        }

        if(idParametro == 0){
            fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts', {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    address: address
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => {
                
                return resp.json();
            })
            .then(data => {
            
            

                alert("Contacto registrado correctamente!");
                setName('');
                setEmail('');
                setPhone('');
                setAddress('');
            
            })
            .catch(error => {
                // Manejo de errores
                console.log(error);
            });
        }else{
            fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts/' + idParametro, {
                method: "PUT",
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    address: address
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => {
                
                return resp.json();
            })
            .then(data => {
            
            

                alert("Contacto actualizado correctamente!");
                setName('');
                setEmail('');
                setPhone('');
                setAddress('');
            
            })
            .catch(error => {
                // Manejo de errores
                console.log(error);
            });
        }
        
        



    }

    const obtenerContactos = () => {
        fetch('https://playground.4geeks.com/contact/agendas/' + slug + '/contacts', {
			method: "GET"
		})
		.then(resp => {
			return resp.json();
		})
		.then(data => {

            if(parametros.id == undefined){
            setIdParametro(0);
        }else{
            setIdParametro(parametros.id);
        }

            let items = data.contacts.filter(x=>x.id == parseInt(parametros.id));
            if(items.length > 0){
                setName(items[0].name);
                setEmail(items[0].email);
                setPhone(items[0].phone);
                setAddress(items[0].address);
            }
            

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
                <div className="col-12 text-center">
                    
                    {
                        idParametro == 0 
                        ?
                            <h1>Add a new contact</h1>
                        :
                            <h1>Update contact</h1>
                    }

                    
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <form onSubmit={guardar}>
                        <div className="form-group">
                            <label className="fw-semibold">ID contact</label>
                            <input  type="text" 
                                    className="form-control"
                                    value={idParametro}   readOnly  disabled/>
                        </div>
                        <div className="form-group">
                            <label className="fw-semibold">Full Name</label>
                            <input  type="text" 
                                    className="form-control"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="fw-semibold">Email</label>
                            <input  type="text" 
                                    className="form-control"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="fw-semibold">Phone</label>
                            <input  type="text" 
                                    className="form-control"
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="fw-semibold">Address</label>
                            <input  type="text" 
                                    className="form-control"
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)} />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary w-100">Save</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Link to="/contact">
                        <span>Volver</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddContact;