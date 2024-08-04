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
        // No alert needed here, the button text can change to "Copied!" or similar
    };
    return (
        <div className={styles.container}>
            {/* <div className={styles.container}> */}
            {/* Global Styles */}
            <style jsx global>{`
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    color: #333;
                    background-color: #f4f4f4;
                }

                h2 {
                    font-size: 28px;
                    color: #4CAF50;
                }
                    ol {
    list-style-type: decimal;
    margin-left: 20px;
}

p {
    font-size: 18px;
    line-height: 1.8;
}

strong {
    font-weight: bold;
}

em {
    font-style: italic;
}

ol {
    margin: 0;
    padding-left: 20px;
}

            `}</style>

            {/* Header Section */}
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src="https://i.ibb.co/F8NQGPp/logo.jpg" alt="Resources and Updates Logo" className={styles.logo} />
                    <h1 className={styles.communityName}>Resources and Updates</h1>
                </div>
                <nav className={styles.nav}>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#services" className={styles.navLink}>Services</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                    <a href="#faq" className={styles.navLink}>FAQ</a>
                </nav>
            </header>

            {/* Main Content Section */}
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
                                Simplify your link management with our <a href="https://resourcesandcarrier.online/shortURL" className={styles.navLink}>custom URL shortener</a>. Efficiently shorten, manage, and share your URLs to enhance your online presence and streamline your communication.
                            </li><br />
                            <li>
                                <strong>Career Development Workshops:</strong>
                                Participate in exclusive workshops and webinars designed to boost your career skills. Topics range from resume building and interview preparation to advanced technical skills and industry insights.
                            </li><br />
                            <li>
                                <strong>Personalized Job Alerts:</strong>
                                Customize your job search with our personalized alert system. Set your preferences and receive notifications about opportunities that match your interests and career goals.
                            </li><br />
                        </ol>
                        <p>
                            Our services are tailored to help you thrive in the competitive field of CSE. Join us today to take full advantage of these resources and propel your career forward!
                        </p>
                    </div>
                </section>


                <section id="contact" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Contact Us</h2>
                        <p>
                            Have any questions, feedback, or need assistance? We’re here to help! Reach out to us at:
                        </p>
                        <p>
                            <a href="mailto:resourcesandupdates@gmail.com" className={styles.email}>resourcesandupdates@gmail.com</a>
                        </p>
                    </div>
                </section>

                <section id="faq" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Frequently Asked Questions (FAQ)</h2>
                        <p>
                            <strong>Q1:</strong> How do I join the WhatsApp group or channel?<br />
                            <strong>A:</strong> Click on the links provided above to join our WhatsApp group or channel.
                        </p>
                        <p>
                            <strong>Q2:</strong> How can I get featured on the community?<br />
                            <strong>A:</strong> Reach out to us with your achievements or projects, and we’ll be happy to feature you!
                        </p>
                        <p>
                            <strong>Q3:</strong> Can I contribute resources to the community?<br />
                            <strong>A:</strong> Yes, we welcome contributions! Contact us via email for more details.
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
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
