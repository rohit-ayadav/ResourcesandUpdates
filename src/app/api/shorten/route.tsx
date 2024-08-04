// app/shorten/route.tsx
import { useState } from 'react';

export default function ShortenRoute() {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });
            const result = await response.json();
            setShortenedUrl(result.shortenedUrl);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortenedUrl && (
                <div>
                    <p>Shortened URL:</p>
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                        {shortenedUrl}
                    </a>
                </div>
            )}
        </div>
    );
}
