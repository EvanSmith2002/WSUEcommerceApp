import { Button, Form, FormControl, Container, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import {CartContext} from "../CartContext";
import CartProduct from './CartProduct';
import { useLocation, useNavigate } from 'react-router-dom';
 


function NavbarComponent() {
    const cart = useContext(CartContext);
    const location = useLocation();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigateTo = useNavigate();

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
      <Navbar expand="sm">
        <Navbar.Brand href="/" style={{ color: 'honeydew' }}>WSU E-COMMERCE STORE</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* Show Cart button on non-admin, non-seller, non-login, non-signup pages */}
          {(location.pathname !== '/admin' && location.pathname !== '/seller' && location.pathname !== '/login' && location.pathname !== '/signup') && (
            <Button className="ml-2" onClick={handleShow}>
              Cart ({productsCount} Items)
            </Button>
          )}

          {/* Show "Sign Up" button only on the login page */}
          {location.pathname === '/login' && (
            <Button variant="primary" className="m-4" onClick={() => navigateTo('/signup')}>Sign Up</Button>
          )}

          {/* Show "Log In" button only on the signup page */}
          {location.pathname === '/signup' && (
            <Button variant="primary" className="m-4" onClick={() => navigateTo('/login')}>Log In</Button>
          )}

          {/* Show "Log Out" button on all pages except login */}
          {(location.pathname !== '/login' && location.pathname !== '/signup') && (
            <Button variant="primary" className="m-4" onClick={() => navigateTo('/login')}>Log Out</Button>
          )}
        </Navbar.Collapse>
      </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;