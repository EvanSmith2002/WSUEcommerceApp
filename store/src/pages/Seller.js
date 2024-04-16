import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import EmptyProductCard from '../components/EmptyProduct';
import { productsArray } from '../productStore';
import EditPrice from '../components/EditPrice';
import DeleteItem from '../components/DeleteItem';

function Seller() {
    const [displayedProducts, setDisplayedProducts] = useState(productsArray);
    const [showModal, setShowModal] = useState(false);
    const [selectedProductID, setSelectedProductID] = useState(null);

    const handleDeleteProduct = (productID) => {
        console.log(productID);
        const updatedProducts = displayedProducts.filter(product => product.id !== productID);
        setDisplayedProducts(updatedProducts);
    };

    const handleEditPrice = (productID) => {
        setSelectedProductID(productID);
        setShowModal(true);
    };

    return (
        <>
            <h1 align="center" className='p-3' style={{ color: 'honeydew' }}>Welcome to the store!</h1>
            <Row xs={1} md={3} className="g-4 m-3">
                {displayedProducts.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                        <DeleteItem onDelete={() => handleDeleteProduct(product.id)} />
                        <Button variant="primary" onClick={() => handleEditPrice(product.id)}>Edit Price</Button>
                        
                    </Col>
                ))}
            </Row>
            <EmptyProductCard />
            {showModal && (
                <EditPrice
                productID={selectedProductID}
                onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
}

export default Seller;
