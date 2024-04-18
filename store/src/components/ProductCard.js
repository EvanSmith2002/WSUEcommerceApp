import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../Contexts/CartContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom'; 


function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.productID);
    const location = useLocation();


    return (
        <Card style={{ flex:1, backgroundColor:'honeydew'}}>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Body><img style={{ width: '200px', height: '200px' }} className = "img-thumbnail" src ={product.imageLink} alt='product'></img></Card.Body>
                <Card.Text>${product.price}</Card.Text>                    
                { (productQuantity > 0 && location.pathname !== '/seller') ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.productID)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.productID)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.productID)} className="my-2">Remove from cart</Button>
                    </>
                    :(
                        location.pathname !== '/seller' && ( // Only render button if not on /seller path
                          <Button variant="primary" onClick={() => cart.addOneToCart(product.productID)}>
                            Add To Cart
                          </Button>
                        )
                      )}
            </Card.Body>
        </Card>
    )
}

export default ProductCard;