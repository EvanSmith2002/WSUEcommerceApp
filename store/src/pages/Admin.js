import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Admin() {
  const [sellRequests, setSellRequests] = useState([]);

  useEffect(() => {
    const fetchSellRequests = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/products');
        const data = await response.json();
        setSellRequests(data);
      } catch (error) {
        console.error('Error fetching sell requests:', error);
      }
    };

    fetchSellRequests();
  }, []);

  const handleApproveRequest = (requestId) => {

  };

  const handleRejectRequest = (requestId) => {

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
                  <Button variant="dark" className="m-2" size="sm" onClick={window.open(request.imageLink, "_blank")}>
                    View Image
                  </Button>
                </td>
                <td>{request.price}</td>
                <td className="text-center">
                  <Button variant="success" className="m-2" size="sm" onClick={() => handleApproveRequest(request.id)}>
                    Approve
                  </Button>
                  <Button variant="danger" className="m-2" size="sm" onClick={() => handleRejectRequest(request.id)}>
                    Reject
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center no-requests">
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
