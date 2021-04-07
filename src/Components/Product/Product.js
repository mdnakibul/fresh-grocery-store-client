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
            <div className="card p-2" style={{minHeight:'350px'}}>
                <img src={imageURL} alt="Vehicle" className="card-img-top"/>
                <div className="card-body">
                <h3 className="card-title text-center text-uppercase">
                    {name}
                </h3>
                <div className=" d-flex">
                    <p className="price">${price}</p>
                    <button className="btn btn-primary d-block m-auto" onClick={buyNow}> Buy Now </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;