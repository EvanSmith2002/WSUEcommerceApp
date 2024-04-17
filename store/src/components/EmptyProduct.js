import React, { useState} from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';


function EmptyProductCard() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    imageLink: "",
  }); // State to store product details

  const handleCloseAddItemModal = () => setShowAddItemModal(false);
  const handleOpenAddItemModal = () => setShowAddItemModal(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value }); // Update product data on form input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const storedUser = localStorage.getItem('user')
      if (!storedUser) {
        throw new Error('User information not found in localStorage');
      }

      const user = JSON.parse(storedUser); // Parse the JSON string
      const sellerID = user.email; // Use email as seller ID

      const response = await fetch(`http://localhost:4000/seller/addProduct/${sellerID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error(`Error adding product: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Product added:', data);
      setShowAddItemModal(false); // Close modal on successful submission
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.'); // Alert user about error
    }
  };

  return (
    <>
      <Button variant="light" size="lg" className="empty-card m-5" onClick={handleOpenAddItemModal}>
        Add item to store
      </Button>

      <Modal show={showAddItemModal} onHide={handleCloseAddItemModal} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Item Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  name="title"
                  value={productData.title}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Price
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="Enter price (e.g., 19.99)"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Image Link
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="Enter imageLink"
                  name="imageLink"
                  value={productData.imageLink}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddItemModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Item
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EmptyProductCard;
