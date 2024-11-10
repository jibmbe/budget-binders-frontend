import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import './BookList.css';

const BookList = () => {
    const { addToCart } = useCart();
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    // Fetch books from the API
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/books/');
                const data = await response.json();
                setBooks(data);
                setFilteredBooks(data); // Initialize filteredBooks with all books
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        };
        fetchBooks();
    }, []);

    // Filter books based on search term
    useEffect(() => {
        const results = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(results);
    }, [searchTerm, books]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="book-list">
            <h1>Book List</h1>
            <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="books-container">
                {filteredBooks.length ? (
                    filteredBooks.map((book) => (
                        <div key={book.id} className="book-item">
                            <img src={book.image} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.description}</p>
                            <p>Price: ${book.price}</p>
                            <button onClick={() => addToCart(book)}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    );
};

export default BookList;
