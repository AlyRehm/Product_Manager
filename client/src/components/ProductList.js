import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const ProductList = (props) => {

    const {allProducts, setAllProducts} = props;


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAllProducts(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    // DONT FORGET, USE BACK TICKS WHEN USING STRING INTERPERLATION 
    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                const newList = allProducts.filter((product, index) => product._id !== idFromBelow)
                setAllProducts(newList);
            })
            .catch((err) => console.log(err))
    }

    return(
        <div>
            <h2>
                Product List:
            </h2>
            {
                allProducts.map((product, index) => (
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <Link to={`/product/edit/${product._id}`}>Edit</Link>
                        <button onClick={()=>deleteFilter(product._id)}>Delete</button>
                    </div>
                ))
        }
        </div>
    )
}

export default ProductList;