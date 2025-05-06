const ContactCard = () => {

    return (
        <div className="row contact">
            <div className="col-12">
                <div className="row p-3">
                    <div className="col-3 d-flex justify-content-center">
                        <img className="imagenContacto" src="https://th.bing.com/th/id/OIP.JBpgUJhTt8cI2V05-Uf53AHaG1?w=218&h=201&c=7&r=0&o=5&pid=1.7" />
                    </div>
                    <div className="col-5">
                        <h6>Juan GOmez</h6>
                        <span className="text-muted"><i className="fa-solid fa-location-dot"></i> uBicacion</span>
                        <br></br>
                        <span className="text-muted"><i className="fa-solid fa-phone-flip"></i> Telefono</span>
                        <br></br>
                        <span className="text-muted"><i className="fa-solid fa-envelope"></i> Coreo</span>
                    </div>
                    <div className="col-3">
                    
                        <a href="https://www.google.com/" className="me-4 text-dark"><i className="fa-solid fa-pen"></i></a>
                        <a href="https://www.google.com/" className="text-dark"><i className="fa-solid fa-trash"></i></a>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;