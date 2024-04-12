import { Button, Container, Form, Col, Row, FormGroup } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


const LOGIN_URL = "http://localhost:4000/login";


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();
  const [error, setError] = useState(null);

  const login = async() => {
    try {
      const response = await Axios.post(LOGIN_URL, {
        email,
        password,
      });

      if (response.status >= 200 && response.status < 300) { //assuming the server returns a success status code (2xx range)
        setError(null)
        navigateTo('/main'); //redirect to the home page or perform any other actions
      } else {
        console.error("Unexpected status code:", response.status); //handle unexpected status codes
      }
    } catch (error) {
      if (error.response && error.response.status === 401) { //handle errors here
        setError("Incorrect login credentials"); //the server returned a 401 status code, indicating incorrect login credentials
      } else {
        console.error("Error logging in:", error.response ? error.response.data.message : error.message); //handle other errors
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle sign in logic here (e.g., call an API to authenticate)
    console.log(`Email: ${email}, Password: ${password}`);
    await login();
    setEmail(''); // Clear form fields after submission
    setPassword('');
  };

  return (
    <>
    <h1 align= "center" className='p-3' style={{ color: 'honeydew' }}>Welcome to WSU's E-Commerce store!</h1> 
    
    <Container className="d-flex justify-content-center  vh-100">
    
          <Form>
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
              <Button className = "m-4" variant="primary" onClick={handleSubmit}>
                Sign In
              </Button>
              {error && <p className='text-black-500 m-3' style={{ display: 'block' }}>{error}</p>}
          </Form>
        
        
      

      
    </Container>
    </>
  );
}

export default LoginPage;
