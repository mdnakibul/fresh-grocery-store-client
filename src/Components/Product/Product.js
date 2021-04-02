import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Product.css'
// import { useHistory } from 'react-router';
import cardImg from '../../images/image 33.png'
const Product = (props) => {
// const {name,image} = props.vehicleInfo;
// console.log(name)
// let history = useHistory();
const exploreRide = ()=>{
    console.log('Explore rides');
}
    return (
        <div className="col-md-3">
            <div className="card p-2" style={{minHeight:'350px'}}>
                <img src={cardImg} alt="Vehicle" className="card-img-top"/>
                <div className="card-body">
                <h3 className="card-title text-center text-uppercase">
                    Product Name
                </h3>
                <div className=" d-flex">
                    <p className="price">$234</p>
                    <button className="btn btn-primary d-block m-auto" onClick={exploreRide}>Take A Ride</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;