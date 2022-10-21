import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import logo from '../../images/whiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faBorderAll, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './AdminPanel.css';
const AddProduct = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = `https://fresh-grocerry-store-server.vercel.app/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res);
                alert('Product Upload Successful');
                reset();
            })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'aab4383b0506f1fa7e90aa51571f2c5c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                        <h1>Add your product here</h1>
                        <form onSubmit={handleSubmit(onSubmit)} id="upload-form">
                            <input {...register("name", { required: true })} className="m-2" placeholder="Product Name" />
                            {errors.name && <span>This field is required</span>}
                            <input {...register("weight", { required: true })} className="m-2" placeholder="Product weight" />
                            {errors.weight && <span>This field is required</span>}
                            <br />
                            <input {...register("price", { required: true })} className="m-2" placeholder="Product price" />
                            {errors.price && <span>This field is required</span>}
                            <input type="file" {...register("image")} onChange={handleImageUpload} className="m-2" />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddProduct;