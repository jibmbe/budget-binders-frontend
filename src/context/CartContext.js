// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create CartContext
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Load cart from localStorage or start with an empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add to cart function
    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
    };

    // Remove from cart function
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((book) => book.id !== id));
    };

    // Calculate total price function
    const getTotalPrice = () => {
        return cart.reduce((total, book) => total + parseFloat(book.price), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook to use cart
export const useCart = () => useContext(CartContext);
