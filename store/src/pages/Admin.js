import React, { useState, useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../Contexts/CartContext';

function Admin() {
  const [sellRequests, setSellRequests] = useState([]);
  const cart = useContext(CartContext)

  useEffect(() => {
    fetchSellRequests();
  }, []);


  const fetchSellRequests = async () => {
    try {
      const response = await fetch('http://localhost:4000/admin/products');
      const data = await response.json();
      setSellRequests(data);
      cart.fetchProducts();
    } catch (error) {
      console.error('Error fetching sell requests:', error);
    }
  };

  const handleApproveRequest = async (request) => {
    try {
      // Call the approve product API
      const response = await fetch('http://localhost:4000/admin/approveProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ request}),
      });
      const data = await response.json();
      console.log(data);
      fetchSellRequests();
    } catch (error) {
      console.error('Error approving product:', error);
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const response = await fetch(`http://localhost:4000/admin/deleteProduct/${requestId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      fetchSellRequests();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const openImageInNewTab = (imageLink) => {
    window.open(imageLink, "_blank");
  };

  return (
    <>
      <h1 className="text-center p-5 back-white">Admin Sell Requests</h1>
      <Table bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellRequests.length > 0 ? (
            sellRequests.map((request, index) => (
              <tr key={request.id}>
                <td>{index + 1}</td>
                <td>{request.user}</td>
                <td>{request.title}</td>
                <td>
                  <Button variant="dark" className="m-2" size="sm" onClick={() => openImageInNewTab(request.imageLink)}>
                    View Image
                  </Button>
                </td>
                <td>{request.price}</td>
                <td className="text-center">
                  <Button variant="success" className="m-2" size="sm" onClick={() => handleApproveRequest(request)}>
                    Approve
                  </Button>
                  <Button variant="danger" className="m-2" size="sm" onClick={() => handleRejectRequest(request._id)}>
                    Reject
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center no-requests">
                No current admin requests.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Admin;
