import React from 'react';

const Shop = () => {
    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f4f4f4' }}>
            <h1 style={{ fontSize: '3em', color: '#FF5722', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                Shop Our Beautiful Budget Binders
            </h1>
            <p style={{ fontSize: '1.2em', color: '#555', lineHeight: '1.8', textAlign: 'center', marginBottom: '40px' }}>
                Browse through our wide selection of budget binders and find the perfect one to help you stay organized, motivated, and on top of your finances!
            </p>

            {/* Product Listing */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    padding: '0 20px',
                }}
            >
                {/* Example Product 1 */}
                <div
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <img
                        src="https://i.etsystatic.com/31630369/r/il/4f36cd/6076470076/il_fullxfull.6076470076_ao9m.jpg"
                        alt="Binder 1"
                        style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                    <h3 style={{ fontSize: '1.4em', color: '#333', fontWeight: 'bold' }}>Colorful Binder</h3>
                    <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.5' }}>
                        Perfect for keeping all your financial records in order with a bright and fun design.
                    </p>
                    <p style={{ fontSize: '1.2em', color: '#FF9900', fontWeight: 'bold', margin: '10px 0' }}>$19.99</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.1em', color: '#FF5722', fontWeight: 'bold' }}>⭐⭐⭐⭐☆</span>
                        <button
                            style={{
                                padding: '12px 25px',
                                backgroundColor: '#FF5722',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#E64A19')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#FF5722')}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Example Product 2 */}
                <div
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <img
                        src="https://i.etsystatic.com/34522510/r/il/277466/6168753537/il_fullxfull.6168753537_63in.jpg"
                        alt="Binder 2"
                        style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                    <h3 style={{ fontSize: '1.4em', color: '#333', fontWeight: 'bold' }}>Elegant Black Binder</h3>
                    <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.5' }}>
                        A sleek and professional design for those who love simplicity and style in their workspace.
                    </p>
                    <p style={{ fontSize: '1.2em', color: '#FF9900', fontWeight: 'bold', margin: '10px 0' }}>$24.99</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.1em', color: '#FF5722', fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</span>
                        <button
                            style={{
                                padding: '12px 25px',
                                backgroundColor: '#FF5722',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#E64A19')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#FF5722')}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Example Product 3 */}
                <div
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <img
                    src="https://i.etsystatic.com/31007645/r/il/905dcc/4846218949/il_1080xN.4846218949_nw4o.jpg"
                        alt="Binder 3"
                        style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                    <h3 style={{ fontSize: '1.4em', color: '#333', fontWeight: 'bold' }}>Classic Leather Binder</h3>
                    <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.5' }}>
                        A luxurious leather binder that adds a touch of class to your desk while keeping your finances organized.
                    </p>
                    <p style={{ fontSize: '1.2em', color: '#FF9900', fontWeight: 'bold', margin: '10px 0' }}>$39.99</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.1em', color: '#FF5722', fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</span>
                        <button
                            style={{
                                padding: '12px 25px',
                                backgroundColor: '#FF5722',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#E64A19')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#FF5722')}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
