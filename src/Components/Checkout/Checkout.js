import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css'

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        fetch('https://fresh-grocerry-store-server.vercel.app/product/' + id)
            .then(res => res.json())
            .then(data => {
                setProduct(data[0])
            })
    }, [id]);
    const handleCheckout = () => {
        const order = {
            name: product.name,
            price: product.price,
            quantity: 1,
            date: new Date(),
            email: loggedInUser.email
        }
        fetch('https://fresh-grocerry-store-server.vercel.app/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => {
            if (res) {
                history.push('/orders')
            }
        })
    }
    return (
        <div className="container">
            <h2>Checkout</h2>
            <p>Product Id ; {id}</p>
            <table className="table" id="checkout-table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><b>Total</b></td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary d-block ml-auto" onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;