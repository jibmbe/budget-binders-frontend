import React, { useState } from 'react';

const Purchase = () => {
    const [purchaseItem, setPurchaseItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setSuccessMessage('');

        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            setError('Please log in first');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/purchase/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    item: purchaseItem,
                    quantity: quantity,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.detail || 'Purchase failed');
            }

            const data = await response.json();
            setSuccessMessage(`Purchase successful! Order ID: ${data.order_id}`);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Make a Purchase</h2>
            <form onSubmit={handleSubmit}>
                <label>Item:</label>
                <input
                    type="text"
                    value={purchaseItem}
                    onChange={(e) => setPurchaseItem(e.target.value)}
                    required
                />
                <label>Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    min="1"
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <button type="submit">Purchase</button>
            </form>
        </div>
    );
};

export default Purchase;
