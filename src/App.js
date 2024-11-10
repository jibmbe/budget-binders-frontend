import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/main.css';
import { CartProvider } from './context/CartContext'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Shop from './components/Shop'; 
import Purchase from './components/Purchase';
import UserList from './components/UserList';  // Import UserList component
import ContactPage from './pages/ContactPage';  // Import the new ContactPage component

const App = () => {
    return (
        <CartProvider>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/books">Book List</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link> {/* Added link to Shop */}
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/purchase">Purchase</Link> {/* Added link to Purchase */}
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link> {/* Added link to Contact Us */}
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/shop" element={<Shop />} /> {/* Added Shop route */}
                    <Route path="/purchase" element={<Purchase />} /> {/* Added Purchase route */}
                    <Route path="/contact" element={<ContactPage />} /> {/* Added Contact Us route */}
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
