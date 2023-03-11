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

    return(
        <div>
            <h2>
                Product List:
            </h2>
            {
                allProducts.map((product, index) => (
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                ))
        }
        </div>
    )
}

export default ProductList;