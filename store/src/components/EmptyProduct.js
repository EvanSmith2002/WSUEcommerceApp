import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

function EmptyProductCard() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const handleCloseAddItemModal = () => setShowAddItemModal(false);
  const handleOpenAddItemModal = () => setShowAddItemModal(true);

  return (
    <>
      <Button variant="light" size="lg" className="empty-card m-5" onClick={handleOpenAddItemModal}>
        Add item to store
      </Button>

      <Modal show={showAddItemModal} onHide={handleCloseAddItemModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Item Name
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Enter item name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Number of Items
              </Form.Label>
              <Col sm="9">
                <Form.Control type="number" min="1" placeholder="Enter quantity" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Price
              </Form.Label>
              <Col sm="9">
                <Form.Control type="number" min="0.01" step="0.01" placeholder="Enter price (e.g., 19.99)" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddItemModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAddItemModal}>
            Save Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmptyProductCard;
