"use client"; 
import Link from 'next/link';
import React, { useState } from 'react';

export default function FeedbackPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        type: 'Feedback',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

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
                <h2 style={subHeaderStyle}>Feedback / Suggestion / Enquiry</h2>
                <p style={warningTextStyle}>This feature is not working now, it will start soon.</p>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={inputGroupStyle}>
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="whatsapp" style={labelStyle}>WhatsApp Number</label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="type" style={labelStyle}>Type</label>
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            style={selectStyle}
                            required
                        >
                            <option value="Feedback">Feedback</option>
                            <option value="Suggestion">Suggestion</option>
                            <option value="Enquiry">Enquiry</option>
                        </select>
                    </div>

                    <div style={inputGroupStyle}>
                        <label htmlFor="message" style={labelStyle}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={textareaStyle}
                            required
                        />
                    </div>

                    <button type="submit" style={submitButtonStyle}>Submit</button>
                </form>
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
    maxWidth: '1000px',
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

const warningTextStyle = {
    color: 'red',
    fontSize: '1em',
    marginBottom: '20px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    gap: '15px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left' as const,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '8px',
};

const inputGroupStyle = {
    width: '100%',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold' as const,
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
};

const selectStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
    height: '100px',
};

const submitButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer' as const,
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
