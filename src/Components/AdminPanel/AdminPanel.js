import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../images/whiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faBorderAll, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './AdminPanel.css'
const AdminPanel = () => {
const handleAddProduct =()=>{

}

    return (
        <section style={{ height: '90vh' }}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-2 admin-left h-100">
                        <img src={logo} alt="Logo" className="img-fluid mb-3" />
                        <ul className="admin-link-list">
                            <li><FontAwesomeIcon icon={faBorderAll} /> <Link to="/manage">Manage Product</Link>  </li>
                            <li><FontAwesomeIcon icon={faPlus} /> <Link to="/add"> Add Product</Link> </li>
                            <li><FontAwesomeIcon icon={faPencilAlt} /> <Link to="/edit">Edit Product</Link> </li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <h2>Add Product</h2>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="name" placeholder="Product name" aria-label="Product name" required/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="weight" placeholder="Product weight" aria-label="Product weight" required/>
                            </div>
                            <br />

                            <br />
                            
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="price" placeholder="Product Price" aria-label="Product price" required/>
                            </div>
                            <div className="col-md-6">
                                <input type="file" className="form-control" placeholder="Product picture" aria-label="Product image" required/>
                                <button className="btn btn-primary mt-2 d-block ml-auto" onClick={handleAddProduct}>Save</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;