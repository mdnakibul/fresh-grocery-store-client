import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
const Home = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
        .catch(error => console.log(error))
    },[])
    return (
        <section>
            <Container className="mt-5">
                <Row>
                    <div className="input-group mb-3">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" placeholder="Seach..."/>
                        </div>
                        <button type="button" className="btn btn-primary">
                            Search
                        </button>
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