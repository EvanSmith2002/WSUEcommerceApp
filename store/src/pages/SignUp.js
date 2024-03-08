import { Button, Container, Form, Col, Row, FormGroup } from 'react-bootstrap';
import { useState } from 'react';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign up logic here (e.g., call an API to create a new user)
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    setName(''); // Clear form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <h1 align= "center" className='p-3' style={{ color: 'honeydew' }}>Welcome to WSU's E-Commerce store!</h1> 

    <Container className="d-flex justify-content-center vh-100">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName" className='m-4'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

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

        <Button variant="primary" type="submit" className='m-4'>
          Sign Up
        </Button>
      </Form>
    </Container>
    </>
  );
}

export default SignUpPage;
