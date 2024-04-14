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
import AccessDenied from './pages/AccessDenied';
import PrivateRoute from './components/PrivateRoute';

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
              <Route path="signup" element={<SignUpPage />} />

              <Route path='main' element={<PrivateRoute requiredRole={'Buyer'} page={<Store />}/>}/>
              <Route path='admin' element={<PrivateRoute requiredRole={'Admin'} page={<Admin/>}/>}/>
              <Route path='seller' element={<PrivateRoute requiredRole={'Seller'} page={<Seller/>}/>}/>
              

              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
              <Route path='access-denied' element={<AccessDenied/>}/>
            </Routes>
        </BrowserRouter>
        
      </Container>
      </CartProvider>
      </UserProvider>
    
  );
}

export default App;