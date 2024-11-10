import React from 'react';

const Home = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#FAFAFA' }}>
            {/* Main Section */}
            <section style={{
                textAlign: 'center', marginBottom: '50px', background: '#F7F7F7', padding: '40px 20px',
                borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{
                    fontSize: '3.8em', color: '#FF5722', fontWeight: 'bold', marginBottom: '20px',
                    textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 5px rgba(0,0,0,0.2)'
                }}>
                    Welcome to Budget Binders by Madge!
                </h1>
                <p style={{
                    fontSize: '1.4em', color: '#555', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto',
                    fontStyle: 'italic', fontWeight: '300'
                }}>
                    Transform your budgeting experience with our beautifully crafted binders. Whether for daily finance tracking, event planning, or saving goals, our binders help you stay organized and motivated!
                </p>
                <div style={{ marginTop: '40px' }}>
                    <img src="https://i.pinimg.com/736x/db/01/14/db0114258f91bab8661a67bdd5e911d2.jpg"
                         alt="Budget Binders Collection"
                         style={{
                             width: '100%', maxWidth: '800px', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                             margin: '0 auto', transition: 'transform 0.3s ease-in-out', cursor: 'pointer'
                         }}
                         onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                         onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section style={{
                backgroundColor: '#FAFAFA', padding: '50px 20px', borderTop: '5px solid #FF5722',
                marginBottom: '60px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{
                    fontSize: '2.8em', color: '#333', textAlign: 'center', marginBottom: '30px',
                    fontWeight: 'bold'
                }}>
                    Why Choose Budget Binders by Madge?
                </h2>
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px',
                    paddingTop: '20px', animation: 'fadeIn 1.5s ease-in-out'
                }}>
                    <div style={{
                        fontSize: '1.2em', color: '#555', background: '#fff', padding: '30px', borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                    }}>
                        <strong style={{ color: '#FF5722', fontSize: '1.5em', fontWeight: 'bold' }}>
                            Stylish & Colorful Designs
                        </strong>
                        <p>Our binders feature vibrant and attractive designs, turning your financial planning into a visually exciting experience.</p>
                    </div>
                    <div style={{
                        fontSize: '1.2em', color: '#555', background: '#fff', padding: '30px', borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                    }}>
                        <strong style={{ color: '#FF5722', fontSize: '1.5em', fontWeight: 'bold' }}>
                            Durable & Long-Lasting
                        </strong>
                        <p>Crafted with high-quality materials, our binders are made to withstand years of daily use while keeping your finances organized.</p>
                    </div>
                    <div style={{
                        fontSize: '1.2em', color: '#555', background: '#fff', padding: '30px', borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                    }}>
                        <strong style={{ color: '#FF5722', fontSize: '1.5em', fontWeight: 'bold' }}>
                            Customizable Dividers
                        </strong>
                        <p>Our binders come with easy-to-use dividers that allow you to personalize your organizational system for your unique needs.</p>
                    </div>
                    <div style={{
                        fontSize: '1.2em', color: '#555', background: '#fff', padding: '30px', borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                    }}>
                        <strong style={{ color: '#FF5722', fontSize: '1.5em', fontWeight: 'bold' }}>
                            Affordable Prices
                        </strong>
                        <p>Get the best bang for your buck with our affordably priced binders without compromising on design or durability.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section style={{ marginTop: '60px', textAlign: 'center', backgroundColor: '#FF5722', padding: '40px 20px', borderRadius: '8px', color: '#fff' }}>
                <h2 style={{
                    fontSize: '2.8em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px',
                    marginBottom: '20px'
                }}>
                    Shop Now and Get Organized!
                </h2>
                <p style={{
                    fontSize: '1.3em', color: '#fff', margin: '20px 0', fontStyle: 'italic', lineHeight: '1.6',
                    maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'
                }}>
                    Discover the perfect binder for your financial journey. Start organizing today, stay on top of your goals, and build the future you want with our stylish and functional budget binders!
                </p>
                <button
                    onClick={() => window.location.href = '/shop'}
                    style={{
                        padding: '14px 28px', fontSize: '1.4em', backgroundColor: '#fff', color: '#FF5722', border: 'none',
                        borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease, transform 0.3s ease',
                        marginTop: '20px', textTransform: 'uppercase'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#FF7043'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
                >
                    Browse Our Binders
                </button>
            </section>
        </div>
    );
};

export default Home;
