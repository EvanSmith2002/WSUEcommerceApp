import {Button} from 'react-bootstrap';
import { CartContext } from "../Contexts/CartContext";
import { useContext, useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const [productData, setProductData] = useState(null); // Initial state is null

    useEffect(() => {
        const fetchData = async () => {
          const data = await getProductData(id);
          setProductData(data);
        };
        fetchData();
      }, [id]);

    async function getProductData(id){
        try {
            const response = await axios.get(`http://localhost:4000/seller/item/${id}`);
            const product = response.data[0]; // Assuming the API returns an array with one product
            return product;
          } catch (error) {
            console.error('Error fetching product data:', error);
            return null; // Handle cases where product data is unavailable
          }
        }

return (
    <>
      {productData ? (
        <>
          <h3>{productData.title}</h3>
          <p>{quantity} total</p>
          <p>${(quantity * productData.price).toFixed(2)}</p>
          <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        </>
      ) : (
        <p>Loading product data...</p>
      )}
    </>
  );
}

export default CartProduct;