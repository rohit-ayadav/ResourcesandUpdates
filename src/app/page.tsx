"use client"; // Mark as a Client Component

import React, { use, useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
        <Analytics /> {/* Add the Analytics component here */}
      </>
    );
  }

const Page = () => {
    useEffect(() => {
        applyResponsiveStyles();
        window.addEventListener("resize", applyResponsiveStyles);
        return () => window.removeEventListener("resize", applyResponsiveStyles);
    }, []);

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
        <div>
            <div>
                <header style={{
                    //header should be fixes

                    top: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '15px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}>

                    <div style={{
                        maxWidth: "1200px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 20px"
                    }}>
                        <img
                            src="/logo.jpg"
                            alt="Resources and Updates Logo"
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                            }}
                        />
                        <h1 style={{
                            margin: "0",
                            fontSize: "28px",
                            fontWeight: "bold"
                        }}>Resources and Updates</h1>
                    </div>
                </header>

                {/* <nav style={{

                    display: "flex",
                    justifyContent: "center",
                    padding: "10px 0",
                    backgroundColor: "#0056b3",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    //change in hamburger menu in mobile view 


                }}>
                    <Link href="/#about" style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "18px",
                        padding: "0 15px",
                        borderBottom: "2px solid transparent",
                        transition: "border-bottom 0.3s"
                    }} onMouseOver={e => e.currentTarget.style.borderBottom = "2px solid white"} onMouseOut={e => e.currentTarget.style.borderBottom = "2px solid transparent"}>
                        About
                    </Link>
                    <Link href="/#services" style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "18px",
                        padding: "0 15px",
                        borderBottom: "2px solid transparent",
                        transition: "border-bottom 0.3s"
                    }} onMouseOver={e => e.currentTarget.style.borderBottom = "2px solid white"} onMouseOut={e => e.currentTarget.style.borderBottom = "2px solid transparent"}>
                        Services
                    </Link>
                    <Link href="/#contact" style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "18px",
                        padding: "0 15px",
                        borderBottom: "2px solid transparent",
                        transition: "border-bottom 0.3s"
                    }} onMouseOver={e => e.currentTarget.style.borderBottom = "2px solid white"} onMouseOut={e => e.currentTarget.style.borderBottom = "2px solid transparent"}>
                        Contact
                    </Link>
                    <Link href="/#faq" style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "18px",
                        padding: "0 15px",
                        borderBottom: "2px solid transparent",
                        transition: "border-bottom 0.3s"
                    }} onMouseOver={e => e.currentTarget.style.borderBottom = "2px solid white"} onMouseOut={e => e.currentTarget.style.borderBottom = "2px solid transparent"}>
                        FAQ
                    </Link>
                    <Link href="/team" style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "18px",
                        padding: "0 15px",
                        borderBottom: "2px solid transparent",
                        transition: "border-bottom 0.3s"
                    }} onMouseOver={e => e.currentTarget.style.borderBottom = "2px solid white"} onMouseOut={e => e.currentTarget.style.borderBottom = "2px solid transparent"}>
                        Team
                    </Link>
                </nav> */}
                <nav style={desktopNavStyle}>
                    <Link href="/#about" style={navLinkStylenav}>About</Link>
                    <Link href="/#services" style={navLinkStylenav}>Services</Link>
                    <Link href="/#contact" style={navLinkStylenav}>Contact</Link>
                    <Link href="/#faq" style={navLinkStylenav}>FAQ</Link>
                    <Link href="/team" style={navLinkStylenav}>Team</Link>
                </nav>
                {/* <div style={hamburgerMenuStyle} onClick={toggleNav}>
                    ☰
                </div>

                <nav style={mobileNavStyle(navOpen)}>
                    <Link href="/#about" style={navLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About</Link>
                    <Link href="/#services" style={navLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Services</Link>
                    <Link href="/#contact" style={navLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contact</Link>
                    <Link href="/#faq" style={navLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>FAQ</Link>
                    <Link href="/team" style={navLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Team</Link>
                </nav> */}
            </div>
            <main style={mainStyle}>
                <section style={ctaStyle}>
                    <div style={ctaContentStyle}>
                        <img
                            src="/logo.jpg"
                            alt="Resources and Updates Logo"
                            style={logoLargeStyle}
                        />
                        <h1 style={communityNameStyle}>Resources and Updates</h1>
                        <h2 style={taglineStyle}>Your go-to community for job/internship opportunities in CSE</h2>
                        <div style={{ ...buttonsContainerStyle, flexWrap: "wrap" }}>
                            <Link href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t"
                                style={buttonStyle as React.CSSProperties}
                            >
                                📲 Follow WhatsApp Channel
                            </Link>
                            <Link href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B"
                                style={buttonStyle as React.CSSProperties}
                            >
                                📱 Join WhatsApp Group
                            </Link>
                            <Link href="https://linkedin.com/company/resources-and-updates/"
                                style={buttonStyle as React.CSSProperties}
                            >
                                🔗 Follow on LinkedIn
                            </Link>
                            <Link href="/feedback"
                                style={buttonStyle as React.CSSProperties}
                            >
                                Feedback and Suggestion
                            </Link>
                            <Link href="/shortURL"
                                style={buttonStyle as React.CSSProperties}
                            >
                                🔗 URL Shortener
                            </Link>
                            <Link href="/team"
                                style={buttonStyle as React.CSSProperties}
                            >
                                Team Members
                            </Link>
                        </div>
                        <button onClick={handleShare} style={shareButtonStyle}>
                            Share with your Friends
                        </button>
                    </div>
                </section>

                <section id="about" style={sectionStyle}>
                    <div style={contentContainerStyle}>
                        <h2 style={sectionHeaderStyle}>About Us</h2>
                        <p style={paragraphStyle}>
                            Welcome to <strong>Resources and Updates</strong>! Our mission is to empower you with the best job and internship opportunities in the dynamic field of Computer Science and Engineering (CSE). As a leading community, we are committed to providing you with the latest information, valuable resources, and unparalleled networking opportunities that are crucial for your career development.
                        </p>
                        <p style={paragraphStyle}>
                            At <strong>Resources and Updates</strong>, we believe in the power of staying informed and connected. Whether you’re seeking your next career move or looking to expand your professional network, we offer a wealth of resources designed to support your growth and success. From curated job listings to insightful articles and industry updates, we have everything you need to stay ahead in the tech industry.
                        </p>
                        <p style={paragraphStyle}>
                            <em>
                                Join our community to access exclusive opportunities, connect with fellow tech enthusiasts and professionals, and navigate your career with confidence!
                            </em>
                        </p>
                    </div>
                </section>

                <section id="services" style={sectionStyle}>
                    <div style={contentContainerStyle}>
                        <h2 style={sectionHeaderStyle}>Our Services</h2>
                        <p style={paragraphStyle}>
                            At <strong>Resources and Updates</strong>, we offer a range of services designed to support and enhance your career journey in Computer Science and Engineering (CSE). Our goal is to provide you with comprehensive tools and opportunities that align with your professional aspirations.
                        </p>
                        <ol style={listStyle}>
                            <li style={listItemStyle}>
                                <strong>Job and Internship Updates:</strong> Receive real-time updates on the latest job and internship opportunities specifically curated for CSE students and professionals. Our listings are regularly updated to ensure you have access to the most relevant positions in the industry.
                            </li>
                            <li style={listItemStyle}>
                                <strong>Networking Opportunities:</strong> Engage with industry experts, alumni, and fellow students through our networking events and online forums. Build valuable connections that can open doors to new opportunities and collaborations in the tech world.
                            </li>
                            <li style={listItemStyle}>
                                <strong>Educational Resources:</strong> Explore a vast collection of resources including study materials, career advice, skill development tips, and more. Whether you’re looking to enhance your technical skills or gain insights into industry trends, our resources are tailored to support your educational and professional growth.
                            </li>
                            <li style={listItemStyle}>
                                <strong>URL Shortener Service:</strong> Simplify your link management with our{" "}
                                <Link href="/shortURL" style={navLinkStyle}>
                                    URL Shortener Service
                                </Link>
                                . Create, track, and manage short links for your important resources and share them effortlessly.
                            </li>
                        </ol>
                        <p style={paragraphStyle}>
                            <em>
                                Join us today to take advantage of these services and accelerate your career in CSE!
                            </em>
                        </p>
                    </div>
                </section>

                <section id="contact" style={sectionStyle}>
                    <div style={contentContainerStyle}>
                        <h2 style={sectionHeaderStyle}>Contact Us</h2>
                        <p style={paragraphStyle}>
                            We’d love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us through the following channels:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                <strong>Email:</strong>{" "}
                                <Link href="mailto:resourcesandupdates@gmail.com" style={navLinkStyle}>
                                    resourcesandupdates@gmail.com
                                </Link>
                            </li>
                            <li style={listItemStyle}>
                                <strong>LinkedIn:</strong>{" "}
                                <Link href="https://linkedin.com/company/resources-and-updates/" style={navLinkStyle}>
                                    Follow us on LinkedIn
                                </Link>
                            </li>
                            <li style={listItemStyle}>
                                <strong>WhatsApp Channel:</strong>{" "}
                                <Link href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" style={navLinkStyle}>
                                    Join our WhatsApp Channel
                                </Link>
                            </li>
                            <li style={listItemStyle}>
                                <strong>WhatsApp Group:</strong>{" "}
                                <Link href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" style={navLinkStyle}>
                                    Join our WhatsApp Group
                                </Link>
                            </li>
                        </ul>
                        <p style={paragraphStyle}>
                            <em>
                                We look forward to connecting with you and helping you succeed in your career!
                            </em>
                        </p>
                    </div>
                </section>

                <section id="faq" style={sectionStyle}>
                    <div style={contentContainerStyle}>
                        <h2 style={sectionHeaderStyle}>Frequently Asked Questions</h2>
                        <div style={faqItemStyle}>
                            <h3 style={faqQuestionStyle}>
                                How can I stay updated with the latest job opportunities?
                            </h3>
                            <p style={faqAnswerStyle}>
                                Follow our{" "}
                                <Link href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" style={navLinkStyle}>
                                    WhatsApp Channel
                                </Link>{" "}
                                or{" "}
                                <Link href="https://linkedin.com/company/resources-and-updates/" style={navLinkStyle}>
                                    LinkedIn page
                                </Link>{" "}
                                for real-time updates on job and internship listings.
                            </p>
                        </div>
                        <div style={faqItemStyle}>
                            <h3 style={faqQuestionStyle}>
                                Can I contribute to the community?
                            </h3>
                            <p style={faqAnswerStyle}>
                                Yes! We welcome contributions in the form of articles, job leads, and networking tips. Feel free to reach out to us via email at{" "}
                                <Link href="mailto:resourcesandupdates@gmail.com" style={navLinkStyle}>
                                    resourcesandupdates@gmail.com
                                </Link>.
                            </p>
                        </div>
                        <div style={faqItemStyle}>
                            <h3 style={faqQuestionStyle}>
                                What types of jobs are featured in your updates?
                            </h3>
                            <p style={faqAnswerStyle}>
                                We feature a wide range of positions, including internships, entry-level roles, and experienced positions in the field of Computer Science and Engineering. Our goal is to provide opportunities that cater to various career stages.
                            </p>
                        </div>
                        <div style={faqItemStyle}>
                            <dt style={{ fontWeight: "bold" }}>
                                How can I access the URL Shortener Service?
                            </dt>
                            <dd>
                                <p>
                                    You can use our{" "}
                                    <Link href="/shortURL" style={{ color: "#007bff", textDecoration: "none" }}>
                                        URL Shortener Service
                                    </Link>{" "}
                                    to manage your short links efficiently.
                                </p>
                            </dd></div>
                    </div>
                </section>
            </main>


            <footer style={{
                backgroundColor: "#007bff",
                color: "white",
                textAlign: "center",
                padding: "15px 0",
                position: "relative",
                bottom: "0",
                width: "100%",
                boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <p style={{ margin: "0" }}>
                    &copy; {new Date().getFullYear()} Resources and Updates. All rights reserved.
                </p>

                <p style={footerTextStyle}>For inquiries, contact us at{" "}
                    <Link href="mailto:resourcesandupdates@gmail.com" style={navLinkStylef}>
                        resourcesandupdates@gmail.com
                    </Link>
                </p>
            </footer>
        </div>
    );
};

const headerStyle = {
    width: '100%',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
};

const headerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
};

const logoStyle = {
    height: '50px',
    width: 'auto',
};

const headerTitleStyle = {
    fontSize: '1.5rem',
    margin: 0,
};

const navStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
};


const navLinkStylef = {
    textDecoration: 'none',
    color: '#fff',
};

const mainStyle = {
    padding: '2rem',
    marginTop: '60px', // Adjust for fixed header height
};

const ctaStyle = {
    TextAlign: 'center',
    marginBottom: '2rem',
};

const ctaContentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
};

const logoLargeStyle = {
    height: '150px',
    width: 'auto',
    marginBottom: '1rem',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',

};

const communityNameStyle = {
    fontSize: '2rem',
    margin: '0.5rem 0',
};

const taglineStyle = {
    fontSize: '1.2rem',
    color: '#6c757d',
    margin: '0.5rem 0',
};


const buttonsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    width: 'calc(50% - 0.5rem)',
};

const shareButtonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    texeAlign: 'center',
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    
};

const sectionStyle = {
    padding: '2rem 0',
};

const contentContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem',
};

const sectionHeaderStyle = {
    fontSize: '1.8rem',
    marginBottom: '1rem',
};

const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
};

const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '2rem',
};

const listItemStyle = {
    marginBottom: '1rem',
};

const faqItemStyle = {
    marginBottom: '1rem',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    padding: '1rem',
};

const faqQuestionStyle = {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: "bold",
};

const faqAnswerStyle = {
    margin: '0.5rem 0 0',
};

const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    textAlign: 'center',
};

const footerTextStyle = {
    margin: 0,
    fontSize: '0.9rem',
};

const mobileNavStyle = (navOpen: boolean) => ({
    display: navOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#0056b3",
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    padding: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
});

const hamburgerMenuStyle = {
    display: "none",
    fontSize: "24px",
    marginRight: "20px",
    cursor: "pointer",
};

// Inline styles for navigation links
const desktopNavStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
    backgroundColor: "#0056b3",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
};
const navLinkStylenav = {

    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "0 15px",
    borderBottom: "2px solid transparent",
    transition: "border-bottom 0.3s"

};
const navLinkStyle = {

    color: "blue",
    textDecoration: "none",
    // fontSize: "18px",
    // padding: "0 15px",
    borderBottom: "2px solid transparent",
    transition: "border-bottom 0.3s",
    fontweight: "bold",

};

const handleMouseOver = (e: { currentTarget: { style: { borderBottom: string; }; }; }) => e.currentTarget.style.borderBottom = "2px solid white";
const handleMouseOut = (e: { currentTarget: { style: { borderBottom: string; }; }; }) => e.currentTarget.style.borderBottom = "2px solid transparent";

const applyResponsiveStyles = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
        // Mobile View
        Object.assign(hamburgerMenuStyle, { display: "block" });
        Object.assign(desktopNavStyle, { display: "none" });
    } else {
        // Desktop View
        Object.assign(hamburgerMenuStyle, { display: "none" });
        Object.assign(desktopNavStyle, { display: "flex" });
    }
};


export default Page;