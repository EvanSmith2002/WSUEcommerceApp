import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './Contexts/CartContext';
import { UserProvider } from './Contexts/UserContext';
import Admin from "./pages/Admin"
import Seller from './pages/Seller';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';

// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    <UserProvider>
    <CartProvider>
      <Container>
   
        <BrowserRouter>
          <NavbarComponent/>
            <Routes>
            
              <Route index element={<LoginPage />} />
              <Route path="main" element={<Store />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="admin" element={<Admin />} />
              <Route path="seller" element={<Seller />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
              
            </Routes>
        </BrowserRouter>
        
      </Container>
      </CartProvider>
      </UserProvider>
    
  );
}

export default App;