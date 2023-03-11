import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const{allProducts, setAllProducts} = props;

    // HAVE TO SET ALL FIELDS TO STATE
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // EVENT HANDLER FOR WHEN YOU CLICK THE SUBMIT BUTTON ON THE FORM
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products",{
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                    setAllProducts([...allProducts, res.data])
                    setTitle("");
                    setPrice("");
                    setDescription("");
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <div>
                <h1>Product Manager</h1>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Title:</label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            name="title"
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            name="price"
                            type="number"
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            name="description"
                            type="text"
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>    
    )
}

export default ProductForm;