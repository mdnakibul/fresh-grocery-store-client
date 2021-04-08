import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://safe-tundra-00266.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                document.getElementById('loader').style.display = 'none';
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <section>
            <Container className="mt-3">
                <Row>
                    <div className="input-group mb-4 justify-content-center">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" placeholder="Seach..." />
                        </div>
                        <button type="button" className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </Row>
                <Row>
                    <div className="lds-ripple" id='loader'>
                        <div></div>
                        <div></div>
                    </div>
                </Row>
                <Row>
                    {
                        products.map(product => <Product product={product} key={product._id}></Product>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Home;