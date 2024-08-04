"use client"
// app/shorten/page.tsx
import { useState } from 'react';

export default function ShortenPage() {
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [shortenedText, setShortenedText] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState<'single' | 'multiple'>('single');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (mode === 'single') {
            if (!url || !isValidUrl(url)) {
                setError('Please enter a valid URL');
                return;
            }

            setError('');
            setLoading(true);
            try {
                const response = await fetch('/api/shorten', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ url }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setShortenedUrl(result.shorturl);
                setShortenedText('');
            } catch (error) {
                setError('An error occurred while shortening the URL. Please try again.');
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        } else if (mode === 'multiple') {
            if (!text) {
                setError('Please enter text with URLs to shorten');
                return;
            }

            setError('');
            setLoading(true);
            try {
                const urls = extractUrls(text);
                const responses = await Promise.all(
                    urls.map(url => 
                        fetch('/api/shorten', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ url }),
                        })
                    )
                );
                const results = await Promise.all(responses.map(res => res.json()));
                let updatedText = text;
                results.forEach((result, index) => {
                    updatedText = updatedText.replace(urls[index], result.shorturl);
                });
                setShortenedText(updatedText);
                setShortenedUrl('');
            } catch (error) {
                setError('An error occurred while shortening the URLs. Please try again.');
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const isValidUrl = (urlString: string) => {
        try {
            new URL(urlString);
            return true;
        } catch (_) {
            return false;
        }
    };

    const extractUrls = (text: string) => {
        const urlRegex = /https?:\/\/[^\s]+/g;
        return text.match(urlRegex) || [];
    };

    const handleCopy = () => {
        const content = mode === 'single' ? shortenedUrl : shortenedText;
        navigator.clipboard.writeText(content);
        alert('Content copied to clipboard!');
    };

    const handleShare = () => {
        const content = mode === 'single' ? shortenedUrl : shortenedText;
        if (navigator.share) {
            navigator.share({
                title: 'Check out this shortened URL',
                text: `Here is your shortened URL: ${content}`,
                url: shortenedUrl,
            }).catch(console.error);
        } else {
            alert('Sharing is not supported in this browser.');
        }
    };

    return (
        <div style={containerStyle}>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .spinner {
                        border: 4px solid #f3f3f3;
                        border-radius: 50%;
                        border-top: 4px solid #007bff;
                        width: 24px;
                        height: 24px;
                        animation: spin 1s linear infinite;
                    }
                `}
            </style>
            <header style={headerStyle}>
                <h1 style={headerTitleStyle}>Resources and Updates Community</h1>
                <p>Stay updated with the latest job and internship opportunities!</p>
                <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Follow on WhatsApp
                </a>
            </header>

            <h2 style={subHeaderStyle}>URL Shortener</h2>
            <div style={modeSelectorStyle}>
                <label>
                    <input
                        type="radio"
                        name="mode"
                        value="single"
                        checked={mode === 'single'}
                        onChange={() => setMode('single')}
                    />
                    Shorten a Single URL
                </label>
                <label>
                    <input
                        type="radio"
                        name="mode"
                        value="multiple"
                        checked={mode === 'multiple'}
                        onChange={() => setMode('multiple')}
                    />
                    Shorten Multiple URLs
                </label>
            </div>
            <form onSubmit={handleSubmit} style={formStyle}>
                {mode === 'single' && (
                    <input
                        type="url"
                        placeholder="Enter URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        style={inputStyle}
                    />
                )}
                {mode === 'multiple' && (
                    <textarea
                        placeholder="Enter text with URLs"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                        style={{ ...inputStyle, height: '200px', resize: 'vertical' }}
                    />
                )}
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                >
                    {loading ? <div className="spinner"></div> : 'Shorten'}
                </button>
            </form>
            {error && <p style={errorStyle}>{error}</p>}
            {(shortenedUrl || shortenedText) && (
                <div style={resultStyle}>
                    <p>Shortened Result:</p>
                    <pre style={resultTextStyle}>{mode === 'single' ? shortenedUrl : shortenedText}</pre>
                    <div style={buttonContainerStyle}>
                        <button onClick={handleCopy} style={actionButtonStyle}>Copy</button>
                        <button onClick={handleShare} style={actionButtonStyle}>Share</button>
                    </div>
                </div>
            )}

            <footer style={footerStyle}>
                <p>Join our community for more updates!</p>
                <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Follow on WhatsApp
                </a>
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
};

const headerTitleStyle = {
    fontSize: '2.5em',
    margin: '0',
};

const subHeaderStyle = {
    fontSize: '2em',
    marginBottom: '20px',
};

const modeSelectorStyle = {
    marginBottom: '20px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
};

const inputStyle = {
    width: '100%',
    maxWidth: '600px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer' as const,
    position: 'relative' as const,
};

const buttonHoverStyle = {
    backgroundColor: '#0056b3',
};

const spinnerStyle = {
    border: '4px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '4px solid #007bff',
    width: '24px',
    height: '24px',
    animation: 'spin 1s linear infinite',
};

const errorStyle = {
    color: 'red',
    margin: '10px 0',
};

const resultStyle = {
    marginTop: '20px',
    textAlign: 'left' as const,
    whiteSpace: 'pre-wrap' as const,
};

const resultTextStyle = {
    wordBreak: 'break-all' as const,
};

const linkStyle = {
    color: '#007bff',
    textDecoration: 'none' as const,
};

const buttonContainerStyle = {
    marginTop: '10px',
};

const actionButtonStyle = {
    padding: '8px 16px',
    margin: '5px',
    backgroundColor: '#28a745',
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
