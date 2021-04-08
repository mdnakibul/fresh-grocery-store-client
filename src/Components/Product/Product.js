import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Product.css'
import { useHistory } from 'react-router';
const Product = (props) => {
    const {name,price,imageURL,_id} = props.product;
    const history = useHistory();
const buyNow = (props)=>{
    history.push('/checkout/' + _id)
}
    return (
        <div className="col-md-4">
            <div className="card p-2 mb-4" style={{minHeight:'420px'}}>
                <img src={imageURL} alt="Product" className="card-img-top" style={{maxHeight : '250px'}}/>
                <div className="card-body">
                <h4 className="card-title text-center text-uppercase">
                    {name}
                </h4>
                <div className=" d-flex">
                    <p className="price text-primary">${price}</p>
                    <button className="btn btn-primary d-block ml-auto" onClick={buyNow}> Buy Now </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;