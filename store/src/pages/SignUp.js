import { Button, Container, Form, Col, Row, FormGroup } from 'react-bootstrap';
import { useState } from 'react';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // Initialise as true

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      // Handle sign-up logic here (e.g., call an API to create a new user)
      console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setPasswordsMatch(false); // Alert user that passwords don't match
    }
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

        <Form.Group className='m-4' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='m-4' controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isInvalid={!passwordsMatch}
            />
            {!passwordsMatch && (
              <Form.Control.Feedback className= "color: white" type="invalid">
                Passwords don't match!
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button className='m-4' variant="primary" type="submit">Sign Up</Button>
      </Form>
    </Container>
    </>
  );
}

export default SignUpPage;
