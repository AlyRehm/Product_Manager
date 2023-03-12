import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateProduct = (props) => {

    const{id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) =>console.log(err) )
    },[])

    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,})
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err))
        
    }

    return (
        <div>
            <div>
                <h3>Update Product</h3>
            </div>
            <div>
                <form onSubmit={SubmitHandler}>
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
                    <button>Update</button>
                </form>
                <br/>
                <Link to={"/"}>Home</Link>
            </div>
        </div>
    )
}

export default UpdateProduct;