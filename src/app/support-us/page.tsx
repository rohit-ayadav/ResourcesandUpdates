"use client"; 

import Link from 'next/link';
import React from 'react';

export default function DonatePage() {
    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <div style={headerContentStyle}>
                    <img src="/logo.jpg" alt="Resources and Updates Logo" style={logoStyle} />
                    <h1 style={headerTitleStyle}>Resources and Updates</h1>
                </div>
                <nav style={navStyle}>
                    <Link href="/" style={navLinkStyle}>Home</Link>
                    <Link href="/#about" style={navLinkStyle}>About</Link>
                    <Link href="/#services" style={navLinkStyle}>Services</Link>
                    <Link href="/#contact" style={navLinkStyle}>Contact</Link>
                </nav>
            </header>

            <main style={mainContentStyle}>
                <h2 style={subHeaderStyle}>Support Our Community</h2>
                <h2 style={subHeaderStyle}>Make a Donation</h2>
                <p style={donationMessageStyle}>
                    Your support helps us continue our mission of providing valuable resources and updates to the community. Every contribution, big or small, makes a difference.
                </p>
                <div style={donationContainerStyle}>
                    <a href="upi://pay?pa=9721235063584@paytm&pn=PaytmUser&mc=0000&mode=02&purpose=00&orgid=159761&cust=1523273621" style={donateButtonStyle}>Donate via UPI</a>
                    <img src="/scanner-paytm.jpg" alt="Scan to Pay" style={scannerImageStyle} />
                </div>
            </main>

            <footer style={footerStyle}>
                <p>Join our community for more updates!</p>
                <div style={socialLinksStyle}>
                    <Link href="https://linkedin.com/company/resources-and-updates/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>LinkedIn</Link>
                    <Link href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>WhatsApp Channel</Link>
                    <Link href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>WhatsApp Group</Link>
                </div>
                <p style={footerTextStyle}>For inquiries, email us at <Link href="mailto:resourcesandupdates@gmail.com" style={linkStyle}>resourcesandupdates@gmail.com</Link></p>
            </footer>
        </div>
    );
}

// Inline styles
const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center' as const,
};

const headerStyle = {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    position: 'relative' as const,
};

const headerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
};

const logoStyle = {
    height: '80px',
    width: '80px',
    borderRadius: '50%',
    marginRight: '15px',
};

const headerTitleStyle = {
    fontSize: '2.5em',
    margin: '0',
    fontWeight: 'bold',
};

const navStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const navLinkStyle = {
    color: '#007bff',
    textDecoration: 'none' as const,
    margin: '0 15px',
    fontSize: '1.2em',
};

const mainContentStyle = {
    textAlign: 'center' as const,
};

const subHeaderStyle = {
    fontSize: '2em',
    marginBottom: '20px',
};

const donationMessageStyle = {
    fontSize: '1.2em',
    marginBottom: '20px',
    lineHeight: '1.5',
};

const donationContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    gap: '20px',
};

const donateButtonStyle = {
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none' as const,
    fontSize: '1.2em',
    cursor: 'pointer' as const,
};

const scannerImageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    border: '2px solid #ddd',
};

const footerStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
};

const socialLinksStyle = {
    margin: '10px 0',
};

const socialLinkStyle = {
    color: '#007bff',
    textDecoration: 'none' as const,
    margin: '0 10px',
    fontSize: '1.1em',
};

const footerTextStyle = {
    marginTop: '10px',
};

const linkStyle = {
    color: '#007bff',
    textDecoration: 'none' as const,
};

// Media queries for responsive design
const mediaQueries = {
    '@media (max-width: 768px)': {
        donationContainerStyle: {
            flexDirection: 'column' as const,
            textAlign: 'center' as const,
        },
        scannerImageStyle: {
            marginBottom: '15px',
        },
    },
};
