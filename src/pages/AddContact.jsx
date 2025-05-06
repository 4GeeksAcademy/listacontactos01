import { Link } from "react-router-dom";

const AddContact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Add a new contact</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-12">

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