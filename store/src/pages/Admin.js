import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function Admin() {
//   const [sellRequests, setSellRequests] = useState([]);
//   useEffect(() => {
//     const fetchSellRequests = async () => {
//       try {
//         const response = await fetch('/api/sell-requests'); // Replace URL with API endpoint
//         const data = await response.json();
//         setSellRequests(data);
//       } catch (error) {
//         console.error('Error fetching sell requests:', error);
//       }
//     };

//     fetchSellRequests();
//   }, []);

//   const handleApproveRequest = (requestId) => {
//     // Handle approval logic, calling an API/endpoint or updating database 
//     console.log(`Approving request with ID ${requestId}`); // Placeholder for actual implementation

//     // Update the UI to reflect approved request (optional)
//     setSellRequests(sellRequests.filter((request) => request.id !== requestId));
//   };

//   const handleRejectRequest = (requestId) => {
//     console.log(`Rejecting request with ID ${requestId}`);

//     setSellRequests(sellRequests.filter((request) => request.id !== requestId));
//   };
    const sellRequests = [
        {
        id: 1,
        user: "John Doe",
        product: "Classic T-Shirt",
        price: 19.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
        },
        {
        id: 2,
        user: "Jane Smith",
        product: "Hoodie",
        price: 39.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
        },
        {
        id: 3,
        user: "Alice Lee",
        product: "Vintage Wash T-Shirt",
        price: 22.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
        },
    ];

    return (
        <>
          <h1 class="text-center p-5 back-white">Admin Sell Requests</h1>
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
                <td>{request.product}</td>
                <td>
                  <Button variant="dark" className="m-2" size="sm">
                    View Image
                  </Button>
                </td>
                <td>{request.price}</td>
                <td className="text-center">
                    {/* <Button variant="success" size="sm" onClick={() => handleApproveRequest(request.id)}>
                      Approve
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleRejectRequest(request.id)}>
                      Reject
                    </Button> */}
                    <Button variant="success" className="m-2" size="sm">
                      Approve
                    </Button> 
                    <Button variant="danger" className="m-2" size="sm">
                      Reject
                    </Button> 
                  </td>
                </tr>
                ))
            ):(
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