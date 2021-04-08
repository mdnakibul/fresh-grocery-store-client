import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App'
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://safe-tundra-00266.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
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
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity </th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order.name}><td>{order.name}</td><td>{order.quantity}</td><td>$ {order.price}</td></tr>)
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