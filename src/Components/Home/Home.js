import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
const Home = () => {
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
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </Row>
            </Container>
        </section>
    );
};

export default Home;