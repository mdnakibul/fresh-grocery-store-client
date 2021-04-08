import { faBorderAll, faEdit, faPencilAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/whiteLogo.png';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);
    const history = useHistory()
    useEffect(() => {
        fetch('https://safe-tundra-00266.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                document.getElementById('loader').style.display = 'none'
                document.getElementById('product-table').style.display = 'table'
            })
            .catch(error => console.log(error))
    }, [])
    const deleteProduct = (event, id) => {
        console.log('Deleting Product', id);
        fetch('https://safe-tundra-00266.herokuapp.com/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Delete Successul')
                    history.push('/manage')
                }
            })
        console.log(event.target.parentNode.parentNode.parentNode)
        event.target.parentNode.parentNode.parentNode.style.display = 'none';
    }
    const findNode = (event) => {
        console.log(event.target.parentNode.parentNode);
    }
    return (
        <section style={{ height: '90vh' }}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-2 admin-left h-100">
                        <img src={logo} alt="Logo" className="img-fluid mb-3" />
                        <ul className="admin-link-list">
                            <li><FontAwesomeIcon icon={faBorderAll} /> <Link to="/manage">Manage Product</Link>  </li>
                            <li><FontAwesomeIcon icon={faPlus} /> <Link to="/addproduct"> Add Product</Link> </li>
                            <li><FontAwesomeIcon icon={faPencilAlt} /> <Link to="/edit">Edit Product</Link> </li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <h1>Manage your product here</h1>
                        <div className="lds-ripple" id='loader'>
                            <div></div>
                            <div></div>
                        </div>
                        <table className="table" id='product-table' style={{display : 'none'}}>
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product => <tr key={product._id}><td>{product.name}</td><td>{product.weight}</td><td>{product.price}</td><td><FontAwesomeIcon icon={faEdit} color="green" onClick={(event) => findNode(event)} /><FontAwesomeIcon icon={faTrashAlt} className="ml-3" color="red" onClick={(event) => deleteProduct(event, product._id)} /></td></tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageProduct;