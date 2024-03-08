import {Row,Col} from 'react-bootstrap'
import { productsArray } from '../productStore';
import ProductCard from '../components/ProductCard';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';


function Store(){
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const filteredProducts = productsArray.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Filter products based on search term

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return(
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
      </>
    );
  }
  
  export default Store;