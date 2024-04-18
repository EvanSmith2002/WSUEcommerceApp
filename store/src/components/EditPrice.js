import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditPrice({ productID,onSubmit, onClose }) {
    const [newPrice, setNewPrice] = useState('');

    const handleChange = (event) => {
        setNewPrice(event.target.value);
    };



    const handleSubmit = () => {
        // const index = productsArray.findIndex(product => product.id === productID);
        // productsArray[index].price = newPrice;
        onSubmit(productID,newPrice)
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Price</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formNewPrice">
                    <Form.Label>New Price:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter new price"
                        value={newPrice}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditPrice;
