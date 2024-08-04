"use client"; // This directive makes the component a client component, allowing for interactivity

import React from 'react';
import styles from './page.module.css'; // Assuming you have a CSS module for styles

const Page = () => {
    const handleShare = () => {
        const message = `Follow this to get the latest job and internship updates!
    
    LinkedIn: https://linkedin.com/company/resources-and-updates/
    WhatsApp Channel: https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t
    WhatsApp Group: https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B`;
        navigator.clipboard.writeText(message);
        alert("Message copied to clipboard! Share it with your friends.");
    };
    return (
        <div className={styles.container}>
            {/* Header Section */}
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src="https://ibb.co/F8NQGPp" alt="Community Logo" className={styles.logo} />
                    <h1 className={styles.communityName}>Resources and Updates</h1>
                </div>
                <nav className={styles.nav}>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#services" className={styles.navLink}>Services</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                </nav>
            </header>

            {/* Main Content Section */}
            <main className={styles.mainContent}>
                <div className={styles.cta}>
                    <div className={styles.ctaContent}>
                        <img src="https://ibb.co/F8NQGPp" alt="Community Logo" className={styles.logo} />
                        <h1>Resources and Updates</h1>
                        <h2>Your go-to community for job and internship opportunities in CSE</h2>
                        <button onClick={handleShare} className={styles.shareButton}>
                            Share with Friends
                        </button>
                        <div className={styles.buttons}>
                            <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" className={styles.button}>Follow WhatsApp Channel</a>
                            <a href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" className={styles.button}>Join WhatsApp Group</a>
                            <a href="https://linkedin.com/company/resources-and-updates/" className={styles.button}>Follow on LinkedIn</a>
                        </div>
                    </div>
                </div>
                <section id="about" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>About Us</h2>
                        <p>
                            Welcome to <strong>Resources and Updates</strong>! We are your go-to community for job and internship opportunities in Computer Science and Engineering (CSE). Our mission is to provide you with the latest updates, valuable resources, and a platform to connect with like-minded individuals.
                        </p>
                        <p>
                            <em>Join us to stay updated on the best opportunities in the tech world!</em>
                        </p>
                    </div>
                </section>

                <section id="services" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Our Services</h2>
                        <p>
                            We offer a range of services to support your career growth and professional development:
                        </p>
                        <ol>
                            <li><strong>Job and Internship Updates:</strong> Regularly updated listings to help you find the right opportunities.</li>
                            <li><strong>Networking:</strong> Connect with professionals and peers in the CSE field.</li>
                            <li><strong>Resources:</strong> Access valuable resources, including study materials and career advice.</li>
                            <li><strong>URL Shortener:</strong> Use our custom URL shortener to make your links more manageable and shareable. [Details about URL shortener service]</li>
                        </ol>
                    </div>
                </section>

                <section id="contact" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Contact Us</h2>
                        <p>
                            Have any questions or feedback? Feel free to reach out to us at:
                        </p>
                        <p>
                            <a href="mailto:resourcesandupdates@gmail.com" className={styles.email}>resourcesandupdates@gmail.com</a>
                        </p>
                    </div>
                </section>


            </main>

            {/* Footer Section */}
            <footer className={styles.footer}>
                <p>Email us at: <a href="mailto:resourcesandupdates@gmail.com">resourcesandupdates@gmail.com</a></p>
                <div className={styles.footerContent}>
                    <p>Follow us:</p>
                    <div className={styles.socialLinks}>
                        <a href="https://linkedin.com/company/resources-and-updates/" className={styles.socialLink}>LinkedIn</a>
                        <a href="https://t.me/resources_and_updates" className={styles.socialLink}>Telegram</a>
                        <a href="https://www.instagram.com/resources_and_updates/" className={styles.socialLink}>Instagram</a>
                        <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" className={styles.socialLink}>WhatsApp Channel</a>
                        <a href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" className={styles.socialLink}>WhatsApp Group</a>
                    </div>
                </div>
                <div className={styles.footerText}>
                    <p>&copy; {new Date().getFullYear()} Resources and Updates. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Page;
