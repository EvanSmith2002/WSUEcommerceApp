import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { Form, FormControl, Button } from 'react-bootstrap';
import Axios from 'axios';

function Store() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [products, setProducts] = useState([]); // State to store fetched products

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get('http://localhost:4000/seller/products'); // Replace with your actual API endpoint
        const fetchedProducts = response.data;
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the function on component mount
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1 align="center" className="p-3" style={{ color: 'honeydew' }}>
        Welcome to the store!
      </h1>
      <Form inline className="d-flex justify-content-center m-3">
        <FormControl
          type="text"
          placeholder="Search Products"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form>

      <Row xs={1} md={3} className="g-4 m-3">
        {filteredProducts.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      {/* <Button onClick={addItemTest}>Delete Item</Button> */}
    </>
  );
}

export default Store;