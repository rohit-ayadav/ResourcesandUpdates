"use client"; // Mark as a Client Component

import React, { useState } from 'react';
import styles from './page.module.css';

const Page = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleShare = () => {
        const message = `Follow this to get the latest job and internship updates!

    LinkedIn: https://linkedin.com/company/resources-and-updates/
    WhatsApp Channel: https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t
    WhatsApp Group: https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B`;
        navigator.clipboard.writeText(message);
    };

    const toggleNav = () => {
        setNavOpen(prev => !prev);
    };

    return (
        <div className={styles.container}>
            <style jsx global>{`
                /* Global Styles */
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    color: #333;
                    background-color: #f4f4f4;
                }

                /* Header Styles */
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 20px; /* Added padding for better spacing */
                    background-color: #fff;
                    border-bottom: 1px solid #ddd;
                    width: 100%;
                    position: fixed; /* Fix header at top */
                    top: 0; /* Fix to top */
                    left: 0; /* Fix to left */
                    z-index: 1000; /* Ensure it stays on top */
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Added subtle shadow for better distinction */
                    transition: padding 0.3s ease; /* Smooth transition for padding */
                }

                .logoContainer {
                    display: flex;
                    align-items: center;
                }

                .logo {
                    height: 50px;
                    margin-right: 10px;
                }

                .communityName {
                    font-size: 24px;
                }

                .nav {
                    display: flex;
                    align-items: center;
                }

                .navLink {
                    margin: 0 10px;
                    text-decoration: none;
                    color: #333;
                }

                .hamburger {
                    display: none;
                    cursor: pointer;
                }

                .hamburger div {
                    width: 25px;
                    height: 3px;
                    background-color: #333;
                    margin: 5px 0;
                    transition: 0.3s;
                }

                /* Media Queries for Mobile View */
                @media (max-width: 768px) {
                    .header {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .nav {
                        display: none;
                        flex-direction: column;
                        width: 100%;
                        position: absolute;
                        top: 60px; /* Adjust based on header height */
                        left: 0;
                        background-color: #fff;
                        border-top: 1px solid #ddd;
                    }

                    .nav.show {
                        display: flex;
                    }

                    .hamburger {
                        display: block;
                    }

                    .hamburger div {
                        background-color: #333;
                    }

                    .cta img {
                        height: 90px;
                    }

                    .cta h1 {
                        font-size: 34px;
                    }

                    .cta h2 {
                        font-size: 22px;
                    }
                }

                /* Main Content Adjustment */
                .mainContent {
                    padding: 20px;
                    margin-top: 80px; /* Ensure content starts below the fixed header */
                    width: 100%;
                    box-sizing: border-box;
                }

                /* Footer Styles */
                .footer {
                    padding: 20px;
                    background-color: #fff;
                    border-top: 1px solid #ddd;
                }

                .footerContent {
                    text-align: center;
                }

                .socialLinks {
                    margin: 10px 0;
                }

                .socialLink {
                    margin: 0 10px;
                    text-decoration: none;
                    color: blue;
                }

                .footerText {
                    font-size: 14px;
                }

                .footerLink {
                    text-decoration: none;
                    color: #333;
                }
            `}</style>

            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src="https://i.ibb.co/F8NQGPp/logo.jpg" alt="Resources and Updates Logo" className={styles.logo} />
                    <h1 className={styles.communityName}>Resources and Updates</h1>
                </div>
                <div className={styles.hamburger} onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={`${styles.nav} ${navOpen ? styles.show : ''}`}>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#services" className={styles.navLink}>Services</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                    <a href="#faq" className={styles.navLink}>FAQ</a>
                </nav>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.cta}>
                    <div className={styles.ctaContent}>
                        <img src="https://i.ibb.co/F8NQGPp/logo.jpg" alt="Resources and Updates Logo" className={styles.logo1} />
                        <h1 className={styles.communityName}>Resources and Updates</h1>
                        <h2 className={styles.tagline}>Your go-to community for job and internship opportunities in CSE</h2>
                        <div className={styles.buttons}>
                            <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" className={styles.shareButton}>Follow WhatsApp Channel</a>
                            <a href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" className={styles.shareButton}>Join WhatsApp Group</a>
                            <a href="https://linkedin.com/company/resources-and-updates/" className={styles.shareButton}>Follow on LinkedIn</a>
                            <button onClick={handleShare} className={styles.shareButton}>Share with Friends</button>
                        </div>
                    </div>
                </div>

                <section id="about" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>About Us</h2>
                        <p>
                            Welcome to <strong>Resources and Updates</strong>! Our mission is to empower you with the best job and internship opportunities in the dynamic field of Computer Science and Engineering (CSE). As a leading community, we are committed to providing you with the latest information, valuable resources, and unparalleled networking opportunities that are crucial for your career development.
                        </p>
                        <br />
                        <p>
                            At <strong>Resources and Updates</strong>, we believe in the power of staying informed and connected. Whether you’re seeking your next career move or looking to expand your professional network, we offer a wealth of resources designed to support your growth and success. From curated job listings to insightful articles and industry updates, we have everything you need to stay ahead in the tech industry.
                        </p>
                        <br />
                        <p>
                            <em>Join our community to access exclusive opportunities, connect with fellow tech enthusiasts and professionals, and navigate your career with confidence!</em>
                        </p>
                    </div>
                </section>

                <section id="services" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Our Services</h2>
                        <p>
                            At <strong>Resources and Updates</strong>, we offer a range of services designed to support and enhance your career journey in Computer Science and Engineering (CSE). Our goal is to provide you with comprehensive tools and opportunities that align with your professional aspirations.
                        </p><br />
                        <ol>
                            <li>
                                <strong>Job and Internship Updates:</strong>
                                Receive real-time updates on the latest job and internship opportunities specifically curated for CSE students and professionals. Our listings are regularly updated to ensure you have access to the most relevant positions in the industry.
                            </li><br />
                            <li>
                                <strong>Networking Opportunities:</strong>
                                Engage with industry experts, alumni, and fellow students through our networking events and online forums. Build valuable connections that can open doors to new opportunities and collaborations in the tech world.
                            </li><br />
                            <li>
                                <strong>Educational Resources:</strong>
                                Explore a vast collection of resources including study materials, career advice, skill development tips, and more. Whether you’re looking to enhance your technical skills or gain insights into industry trends, our resources are tailored to support your educational and professional growth.
                            </li><br />
                            <li>
                                <strong>URL Shortener Service:</strong>
                                Simplify your link management with our <a href="https://resourcesandcarrier.online/shortURL" className={styles.navLink}>URL Shortener Service</a>. Create, track, and manage short links for your important resources and share them effortlessly.
                            </li>
                        </ol><br />
                        <p>
                            <em>Join us today to take advantage of these services and accelerate your career in CSE!</em>
                        </p>
                    </div>
                </section>

                <section id="contact" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Contact Us</h2>
                        <p>
                            We’d love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us through the following channels:
                        </p>
                        <ul>
                            <li>
                                <strong>Email:</strong> <a href="mailto:resourcesandupdates@gmail.com" className={styles.navLink}>resourcesandupdates@gmail.com</a>
                            </li>
                            <li>
                                <strong>LinkedIn:</strong> <a href="https://linkedin.com/company/resources-and-updates/" className={styles.navLink}>Follow us on LinkedIn</a>
                            </li>
                            <li>
                                <strong>WhatsApp Channel:</strong> <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" className={styles.navLink}>Join our WhatsApp Channel</a>
                            </li>
                            <li>
                                <strong>WhatsApp Group:</strong> <a href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" className={styles.navLink}>Join our WhatsApp Group</a>
                            </li>
                        </ul>
                        <br />
                        <p>
                            <em>We look forward to connecting with you and helping you succeed in your career!</em>
                        </p>
                    </div>
                </section>

                <section id="faq" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Frequently Asked Questions</h2>
                        <dl>
                            <dt><strong>How can I stay updated with the latest job opportunities?</strong></dt>
                            <dd>
                                <p>
                                    Follow our <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" className={styles.navLink}>WhatsApp Channel</a> and <a href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" className={styles.navLink}>WhatsApp Group</a> for real-time updates on job and internship openings.
                                </p>
                            </dd>
                            <br />
                            <dt><strong>Can I contribute to your resources or suggest a topic?</strong></dt>
                            <dd>
                                <p>
                                    Absolutely! We welcome contributions and suggestions. Please contact us via <a href="mailto:resourcesandupdates@gmail.com" className={styles.navLink}>email</a> with your ideas or proposals.
                                </p>
                            </dd>
                            <br />
                            <dt><strong>How can I access your educational resources?</strong></dt>
                            <dd>
                                <p>
                                    Our educational resources are available on our website. Explore our <a href="#services" className={styles.navLink}>Services</a> section for more information on the resources we offer.
                                </p>
                            </dd>
                        </dl>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>&copy; 2024 Resources and Updates. All rights reserved.</p>
                    <div className={styles.socialLinks}>
                        <a href="https://linkedin.com/company/resources-and-updates/" className={styles.socialLink}>LinkedIn</a>
                        <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" className={styles.socialLink}>WhatsApp Channel</a>
                        <a href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" className={styles.socialLink}>WhatsApp Group</a>
                    </div>
                    <p className={styles.footerText}>For inquiries, email us at <a href="mailto:resourcesandupdates@gmail.com" className={styles.footerLink}>resourcesandupdates@gmail.com</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Page;
