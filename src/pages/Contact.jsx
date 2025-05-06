import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard'

const Contact = () => {

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
               
                
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                
            </div>
            
        </div>
    )
}

export default Contact;