import { Button, Container, Form} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


const SIGNUP_URL = "http://localhost:4000/signup";


function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // Initialise as true
  const [role, setRole] = useState('Buyer');
  const navigateTo = useNavigate();
  const [error, setError] = useState(null);

  const createUser = async () => {
    try {
      const response = await Axios.post(SIGNUP_URL, {
        name,
        email,
        password,
        role
      });
      
      if (response.status >= 200 && response.status < 300) { //assuming the server returns a success status code (2xx range)
        console.log(response.data.message); //user successfully created, you can perform any additional actions
        setError(null); //clear any previous errors
        navigateTo('/');
      } else {
        console.error("Unexpected status code:", response.status); //handle unexpected status codes
      }
    } catch (error) {
      if (error.response && error.response.status === 400) { //handle errors here
        setError("Email already exists");
      } else {
        console.error("Error creating user:", error.response ? error.response.data.message : error.message); // Handle other errors
      }
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      // Handle sign-up logic here (e.g., call an API to create a new user)
      console.log(`Name: ${name}, Email: ${email}, Password: ${password}`, `Role: ${role}`);
      await createUser()
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
    } else {
      setPasswordsMatch(false); // Alert user that passwords don't match
    }
  };

  return (
    <>
    <h1 align= "center" className='p-3' style={{ color: 'honeydew' }}>Welcome to WSU's E-Commerce store!</h1> 

    <Container className="d-flex justify-content-center vh-100">
      <Form>
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

          <Form.Group className='m-4' controlId='formRole'>
            <Form.Label>Role</Form.Label>
            <Form.Select className="form-select text-center" onChange={(e) => setRole(e.target.value)}>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </Form.Select>
          </Form.Group>


          <Button className='m-4' variant="primary" onClick={handleSubmit}>Sign Up</Button>
          {error && <p className="text-red-500 m-2">{error}</p>}
      </Form>
    </Container>

    
    </>
  );
}

export default SignUpPage;
