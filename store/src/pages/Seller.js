import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import EmptyProductCard from '../components/EmptyProduct';
import EditPrice from '../components/EditPrice';
import DeleteItem from '../components/DeleteItem';
import axios from 'axios';

function Seller() {
  const [displayedProducts, setDisplayedProducts] = useState([]); // Use empty array initially
  const [showModal, setShowModal] = useState(false);
  const [selectedProductID, setSelectedProductID] = useState(null);

  const fetchProducts = async () => {
    try {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        throw new Error('User information not found in localStorage');
      }

      const user = JSON.parse(storedUser); // Parse the JSON string
      const sellerID = user.email; // Use email as seller ID

      const response = await fetch(`http://localhost:4000/seller/products/${sellerID}`);
      const data = await response.json();
      setDisplayedProducts(data); // Update state with fetched products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts(); // Call the function on component mount
  }, []); // Empty dependency array ensures fetch happens only once

  const handleDeleteProduct = async (productID,id) => {

    try {
      const response = await fetch(`http://localhost:4000/seller/deleteProduct/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json' // Specify content type
        },
        body: JSON.stringify({ productID: productID }) // Pass product ID in JSON format
      });
      const data = await response.json();
      console.log(data);
      fetchProducts(); // Refetch products after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditPrice = async (productID, newPrice) => {
    try {
      const newNumb= parseFloat(newPrice);
      const response = await axios.put(`http://localhost:4000/seller/products/${productID}`, {price:newNumb});
      const data = await response.data;
      console.log('Backend response for edit price:', data);
      fetchProducts();
    } catch (error) {
      console.error('Error editing product price:', error);
    } finally {
      setShowModal(false);
    }
  };


  const handleShowEditModal = (productID) => {
    setSelectedProductID(productID); // Set selectedProductID on button click
    setShowModal(true);
  };
  
  return (
    <>
      <h1 align="center" className='p-3' style={{ color: 'honeydew' }}>Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4 m-3">
        {displayedProducts.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
              <DeleteItem onDelete={() => handleDeleteProduct(product.productID,product._id)} />
              <Button variant="primary" onClick={() => handleShowEditModal(product._id)}>
                Edit Price
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <EmptyProductCard />
      {showModal && (
        <EditPrice
          productID={selectedProductID}
          onSubmit={handleEditPrice} 
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Seller;