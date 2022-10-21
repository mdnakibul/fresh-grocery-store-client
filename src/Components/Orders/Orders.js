import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App'
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://fresh-grocerry-store-server.vercel.app/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                document.getElementById('loader').style.display = 'none';
                document.getElementById('order-table').style.display = 'table'
            })
    }, [])


    let totalPrice = 0;
    for (let i = 0; i < orders.length; i++) {
        const element = orders[i];
        totalPrice = Number(element.price) + totalPrice;
    }
    return (
        <div className="container">
            <h2>Your have {orders.length} Orders</h2>
            <div className="row">
                <div className="lds-ripple" id='loader'>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <table className="table" style={{ display: 'none' }} id='order-table'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity </th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}><td>{order.name}</td><td>{order.quantity}</td><td>$ {order.price}</td></tr>)
                    }
                    <tr>
                        <td colSpan='2'>Total</td>
                        <td>$ {totalPrice}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Orders;