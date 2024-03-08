import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign in logic here (e.g., call an API to authenticate)
    console.log(`Email: ${email}, Password: ${password}`);
    setEmail(''); // Clear form fields after submission
    setPassword('');
  };

  return (
    <>
    <h1 align= "center" className='p-3' style={{ color: 'honeydew' }}>Welcome to WSU's E-Commerce store!</h1> 
    
    <Container className="d-flex justify-content-center  vh-100">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className='m-4'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='m-4'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className = "m-4" variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
    </>
  );
}

export default LoginPage;
