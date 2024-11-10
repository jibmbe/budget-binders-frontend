// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, getTotalPrice } = useCart();

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
    };

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((book) => (
                        <div key={book.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                            <h3>{book.title}</h3>
                            <img src={book.image} alt={book.title} style={{ width: '100px', height: 'auto' }} />
                            <p>{book.description}</p>
                            <p>Price: ${parseFloat(book.price).toFixed(2)}</p>
                            <button onClick={() => removeFromCart(book.id)}>Remove</button>
                        </div>
                    ))}
                    <div style={{ marginTop: '20px' }}>
                        <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
                        <button
                            onClick={handleCheckout}
                            style={{
                                marginTop: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <span>We Accept:</span>
                        <img src={`${process.env.PUBLIC_URL}/images/mpesa.png`} alt="MPesa" style={{ width: '50px', height: 'auto' }} />
                        <img src={`${process.env.PUBLIC_URL}/images/bank-card.png`} alt="Bank Cards" style={{ width: '50px', height: 'auto' }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
