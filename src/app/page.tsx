"use client"; // Mark as a Client Component

import React, { useState } from "react";
import styles from "./page.module.css";

const Page = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleShare = () => {
        const message = `📢 Stay updated with the latest job and internship opportunities!

Connect with us:

🔗 LinkedIn: https://www.linkedin.com/company/resources-and-updates/
📲 WhatsApp Channel: https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t

Share these links with your network and help everyone stay informed! 🌟
`;
        navigator.clipboard.writeText(message);
    };

    const toggleNav = () => {
        setNavOpen((prev) => !prev);
    };

    return (
        <div className={styles.container}>
            <style jsx global>{`
        body {
          font-family: "Arial", sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          color: #333;
          background-color: #f4f4f4;
          max-width: 100%
        }
          h2 {
    font-size: 28px;
    margin: 15px 0;
    color: #555;
}
      `}</style>

            <header style={headerStyle}>
                <div style={headerContentStyle}>
                    <img
                        src="https://i.ibb.co/F8NQGPp/logo.jpg"
                        alt="Resources and Updates Logo"
                        style={logoStyle}
                    />
                    <h1 style={headerTitleStyle}>Resources and Updates</h1>
                </div>
                <nav style={navStyle}>
                    <a
                        href="https://resourcesandcarrier.online/#about"
                        style={navLinkStyle}
                    >
                        About
                    </a>
                    <a
                        href="https://resourcesandcarrier.online/#services"
                        style={navLinkStyle}
                    >
                        Services
                    </a>
                    <a
                        href="https://resourcesandcarrier.online/#contact"
                        style={navLinkStyle}
                    >
                        Contact
                    </a>
                    <a
                        href="https://resourcesandcarrier.online/#faq"
                        style={navLinkStyle}
                    >
                        FAQ
                    </a>
                </nav>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.cta}>
                    <div className={styles.ctaContent}>
                        <img
                            src="https://i.ibb.co/F8NQGPp/logo.jpg"
                            alt="Resources and Updates Logo"
                            className={styles.logo1}
                        />
                        <h1 className={styles.communityName}>Resources and Updates</h1>
                        <h2 className={styles.tagline}>
                            Your go-to community for job/internship opportunities in CSE
                        </h2>
                        <div className={styles.buttons}>
                            <a
                                href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t"
                                className={styles.shareButton}
                            >
                                Follow WhatsApp Channel
                            </a>
                            <a
                                href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B"
                                className={styles.shareButton}
                            >
                                Join WhatsApp Group
                            </a>
                            <a
                                href="https://linkedin.com/company/resources-and-updates/"
                                className={styles.shareButton}
                            >
                                Follow on LinkedIn
                            </a>
                           
                        </div>
                        <button onClick={handleShare} className={styles.shareButton}>
                                Share with your Friends 
                            </button>
                    </div>
                </div>

                <section id="about" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>About Us</h2>
                        <p>
                            Welcome to <strong>Resources and Updates</strong>! Our mission is
                            to empower you with the best job and internship opportunities in
                            the dynamic field of Computer Science and Engineering (CSE). As a
                            leading community, we are committed to providing you with the
                            latest information, valuable resources, and unparalleled
                            networking opportunities that are crucial for your career
                            development.
                        </p>
                        <br />
                        <p>
                            At <strong>Resources and Updates</strong>, we believe in the power
                            of staying informed and connected. Whether you’re seeking your
                            next career move or looking to expand your professional network,
                            we offer a wealth of resources designed to support your growth and
                            success. From curated job listings to insightful articles and
                            industry updates, we have everything you need to stay ahead in the
                            tech industry.
                        </p>
                        <br />
                        <p>
                            <em>
                                Join our community to access exclusive opportunities, connect
                                with fellow tech enthusiasts and professionals, and navigate
                                your career with confidence!
                            </em>
                        </p>
                    </div>
                </section>

                <section id="services" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Our Services</h2>
                        <p>
                            At <strong>Resources and Updates</strong>, we offer a range of
                            services designed to support and enhance your career journey in
                            Computer Science and Engineering (CSE). Our goal is to provide you
                            with comprehensive tools and opportunities that align with your
                            professional aspirations.
                        </p>
                        <br />
                        <ol>
                            <li>
                                <strong>Job and Internship Updates:</strong>
                                Receive real-time updates on the latest job and internship
                                opportunities specifically curated for CSE students and
                                professionals. Our listings are regularly updated to ensure you
                                have access to the most relevant positions in the industry.
                            </li>
                            <br />
                            <li>
                                <strong>Networking Opportunities:</strong>
                                Engage with industry experts, alumni, and fellow students
                                through our networking events and online forums. Build valuable
                                connections that can open doors to new opportunities and
                                collaborations in the tech world.
                            </li>
                            <br />
                            <li>
                                <strong>Educational Resources:</strong>
                                Explore a vast collection of resources including study
                                materials, career advice, skill development tips, and more.
                                Whether you’re looking to enhance your technical skills or gain
                                insights into industry trends, our resources are tailored to
                                support your educational and professional growth.
                            </li>
                            <br />
                            <li>
                                <strong>URL Shortener Service:</strong>
                                Simplify your link management with our{" "}
                                <a
                                    href="https://resourcesandcarrier.online/shortURL"
                                    className={styles.navLink}
                                >
                                    URL Shortener Service
                                </a>
                                . Create, track, and manage short links for your important
                                resources and share them effortlessly.
                            </li>
                        </ol>
                        <br />
                        <p>
                            <em>
                                Join us today to take advantage of these services and accelerate
                                your career in CSE!
                            </em>
                        </p>
                    </div>
                </section>

                <section id="contact" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Contact Us</h2>
                        <p>
                            We’d love to hear from you! If you have any questions, feedback,
                            or inquiries, please reach out to us through the following
                            channels:
                        </p>
                        <ul>
                            <li>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:resourcesandupdates@gmail.com"
                                    className={styles.navLink}
                                >
                                    resourcesandupdates@gmail.com
                                </a>
                            </li>
                            <li>
                                <strong>LinkedIn:</strong>{" "}
                                <a
                                    href="https://linkedin.com/company/resources-and-updates/"
                                    className={styles.navLink}
                                >
                                    Follow us on LinkedIn
                                </a>
                            </li>
                            <li>
                                <strong>WhatsApp Channel:</strong>{" "}
                                <a
                                    href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t"
                                    className={styles.navLink}
                                >
                                    Join our WhatsApp Channel
                                </a>
                            </li>
                            <li>
                                <strong>WhatsApp Group:</strong>{" "}
                                <a
                                    href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B"
                                    className={styles.navLink}
                                >
                                    Join our WhatsApp Group
                                </a>
                            </li>
                        </ul>
                        <br />
                        <p>
                            <em>
                                We look forward to connecting with you and helping you succeed
                                in your career!
                            </em>
                        </p>
                    </div>
                </section>

                <section id="faq" className={styles.section}>
                    <div className={styles.contentContainer}>
                        <h2>Frequently Asked Questions</h2>
                        <dl>
                            <dt>
                                <strong>
                                    How can I stay updated with the latest job opportunities?
                                </strong>
                            </dt>
                            <dd>
                                <p>
                                    Follow our{" "}
                                    <a
                                        href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t"
                                        className={styles.navLink}
                                    >
                                        WhatsApp Channel
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B"
                                        className={styles.navLink}
                                    >
                                        WhatsApp Group
                                    </a>{" "}
                                    for real-time updates on job and internship openings.
                                </p>
                            </dd>
                            <br />
                            <dt>
                                <strong>
                                    Can I contribute to your resources or suggest a topic?
                                </strong>
                            </dt>
                            <dd>
                                <p>
                                    Absolutely! We welcome contributions and suggestions. Please
                                    contact us via{" "}
                                    <a
                                        href="mailto:resourcesandupdates@gmail.com"
                                        className={styles.navLink}
                                    >
                                        email
                                    </a>{" "}
                                    with your ideas or proposals.
                                </p>
                            </dd>
                            <br />
                            <dt>
                                <strong>How can I access your educational resources?</strong>
                            </dt>
                            <dd>
                                <p>
                                    Our educational resources are available on our website.
                                    Explore our{" "}
                                    <a href="#services" className={styles.navLink}>
                                        Services
                                    </a>{" "}
                                    section for more information on the resources we offer.
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
                        <a
                            href="https://linkedin.com/company/resources-and-updates/"
                            className={styles.socialLink}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t"
                            className={styles.socialLink}
                        >
                            WhatsApp Channel
                        </a>
                        <a
                            href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B"
                            className={styles.socialLink}
                        >
                            WhatsApp Group
                        </a>
                    </div>
                    <p className={styles.footerText}>
                        For inquiries, email us at{" "}
                        <a
                            href="mailto:resourcesandupdates@gmail.com"
                            className={styles.footerLink}
                        >
                            resourcesandupdates@gmail.com
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Page;

const headerStyle = {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    position: "relative" as const,
};

const headerContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
};

const logoStyle = {
    height: "80px",
    width: "80px",
    borderRadius: "50%",
    marginRight: "15px",
};

const headerTitleStyle = {
    fontSize: "2.5em",
    margin: "0",
    fontWeight: "bold",
};

const navStyle = {
    display: "flex",
    justifyContent: "center",
};

const navLinkStyle = {
    color: "#007bff",
    textDecoration: "none" as const,
    margin: "0 15px",
    fontSize: "1.2em",
};
