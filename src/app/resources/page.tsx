"use client";

import Link from 'next/link';
import React from 'react';

interface ResourceProps {
    title: string;
    description: string;
    link: string;
}

const Resource: React.FC<ResourceProps> = ({ title, description, link }) => (
    <div style={resourceBoxStyle}>
        <h3 style={resourceTitleStyle}>{title}</h3>
        <p style={resourceDescriptionStyle}>{description}</p>
        <div style={linkContainerStyle}>
            <Link href={link} target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>View Resource</Link>
            <button style={shareButtonStyle} onClick={() => navigator.share({ title, url: link })}>Share</button>
        </div>
    </div>
);

export default function ResourcesPage() {
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
                <h2 style={subHeaderStyle}>Explore More Resources</h2>
                <div style={resourcesContainerStyle}>
                    <Resource
                        title="A to Z Placement Kit"
                        description="The A to Z Placement Kit is a comprehensive guide designed to equip students and job seekers with the tools they need for successful placement preparation. It covers everything from aptitude tests to technical rounds, providing detailed resources, practice materials, and expert tips. Whether you're preparing for campus placements or off-campus opportunities, this kit will help you navigate the entire process with confidence."
                        link="https://docs.google.com/spreadsheets/d/1mBWWVVzCupbjQeTlpXFfHflqTmsBK9rCBQ7QJNE7HdY/edit?gid=1547960802#gid=1547960802"
                    />
                    <Resource
                        title="List of Funded Startups in Bangalore for 2024"
                        description="Explore a comprehensive list of startups in Bangalore that have recently received funding in 2024. This resource is ideal for those looking to connect with emerging companies in a vibrant startup ecosystem."
                        link="https://resourcesandcarrier.online/lpqspx11"
                    />

                    <Resource
                        title="100 Companies Hiring for Remote Jobs"
                        description="Find 100 companies actively hiring for remote positions. This list covers a wide range of industries and roles, providing valuable opportunities for job seekers looking for flexible work arrangements."
                        link="https://resourcesandcarrier.online/lqkpyp1r"
                    />

                    <Resource
                        title="Top 30 Bangalore Startups — Newly Funded & Hiring"
                        description="Discover the top 30 newly funded startups in Bangalore that are actively hiring. This resource highlights promising new ventures and their current job openings, giving you a glimpse into the latest opportunities in the Bangalore startup scene."
                        link="https://resourcesandcarrier.online/lqyo6a44"
                    />

                    <Resource
                        title="100 Top Companies and Startups in Bangalore in 2024"
                        description="This list features 100 top companies and startups in Bangalore for 2024. Whether you're looking for job opportunities or aiming to understand the dynamic business landscape, this resource provides valuable insights into key players in the city."
                        link="https://resourcesandcarrier.online/lrc6j4oj"
                    />

                    <Resource
                        title="List of Top 91 Startups in Bangalore | Best Bangalore Startups"
                        description="Get detailed information on the top 91 startups in Bangalore. This resource showcases the best startups in the city, offering insights into their operations and potential career opportunities."
                        link="https://resourcesandcarrier.online/lrr065j8"
                    />

                    <Resource
                        title="Bangalore Startups Companies List"
                        description="A comprehensive list of Bangalore startups, providing key details about various companies in the city. This resource is useful for networking, job hunting, and understanding the startup ecosystem in Bangalore."
                        link="https://resourcesandcarrier.online/lsays1vq"
                    />

                    <Resource
                        title="1800+ HR Databases to Help You in Your Job or Internship Hunt"
                        description="Access a vast collection of over 1800 HR databases to aid in your job or internship search. This resource is a valuable tool for finding contact information and opportunities across various industries."
                        link="https://resourcesandcarrier.online/3y5rwm2v"
                    />

                    <Resource
                        title="List of 500+ Companies with Their Career Portal, Open Roles, and HR Contact"
                        description="This extensive list includes 500+ companies with details about their career portals, open roles, and HR contact information. It's an essential resource for job seekers looking to explore multiple opportunities in one place."
                        link="https://resourcesandcarrier.online/4fab5m1a"
                    />

                    <Resource
                        title="Leading Startup Companies in Bangalore"
                        description="Explore a curated list of leading startup companies in Bangalore. This resource highlights prominent startups, offering insights into their business operations and potential career opportunities."
                        link="https://resourcesandcarrier.online/4w7unjal"
                    />

                    <Resource
                        title="Indian Unicorn Startup List"
                        description="A comprehensive list of Indian unicorn startups that have achieved significant valuation milestones. This resource provides insights into high-growth companies and their impact on the Indian startup ecosystem."
                        link="https://resourcesandcarrier.online/5d45cdjz"
                    />

                    <Resource
                        title="900+ Startups Hiring REMOTE"
                        description="Discover over 900 startups that are hiring for remote positions. This resource is perfect for job seekers interested in remote work opportunities across various innovative startups."
                        link="https://resourcesandcarrier.online/5u3vd655"
                    />

                    <Resource
                        title="Exciting 1500+ Remote Job Opportunities Alert"
                        description="Stay updated with over 1500 exciting remote job opportunities. This resource provides a broad range of job listings from various industries, catering to those seeking remote work options."
                        link="https://resourcesandcarrier.online/6b5hl22o"
                    />

                    <Resource
                        title="500+ Remote Hiring Companies List"
                        description="A detailed list of 500+ companies that are hiring for remote positions. This resource is invaluable for job seekers looking for remote work across different sectors and roles."
                        link="https://resourcesandcarrier.online/6rwy0fk4"
                    />

                    <Resource
                        title="Bangalore IT Companies List"
                        description="Explore a comprehensive list of IT companies based in Bangalore. This resource provides detailed information on leading IT firms in the city, useful for job seekers and industry professionals."
                        link="https://resourcesandcarrier.online/78nfferh"
                    />

                    <Resource
                        title="Best Resource/Doc for Graphs"
                        description="This resource provides an in-depth understanding of graph theory, covering various algorithms and techniques essential for mastering graphs. It's perfect for both beginners and advanced learners, offering explanations, examples, and practical applications that make complex concepts easier to grasp."
                        link="https://resourcesandcarrier.online/6f9buqnz"
                    />

                    <Resource
                        title="Dynamic Programming for Beginners - Problems & Patterns"
                        description="Dynamic Programming can be challenging, but this resource simplifies it by breaking down the most common problems and patterns. It provides a clear pathway for beginners to understand the fundamental concepts and gradually build up to more complex problems, with examples and solutions to help you practice effectively."
                        link="https://resourcesandcarrier.online/6fp63xij"
                    />

                    <Resource
                        title="All Types of Patterns for Bit Manipulations & How to Use Them"
                        description="Bit manipulation is a powerful tool in programming, and this resource compiles all types of patterns you need to master it. From basic operations to advanced techniques, it covers everything with practical examples and tips on how to apply these patterns in problem-solving scenarios."
                        link="https://resourcesandcarrier.online/6g311x8u"
                    />

                    {/* Add more <Resource /> components here for additional resources */}
                </div>
            </main>

            <footer style={footerStyle}>
                <p>Join our community for more updates!</p>
                <div style={socialLinksStyle}>
                    <Link href="https://linkedin.com/company/resources-and-updates/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>LinkedIn</Link>
                    <Link href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>WhatsApp Channel</Link>
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

const resourcesContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    gap: '20px',
};

const resourceBoxStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left' as const,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    gap: '20px',
    flexWrap: 'wrap' as const,
};

const resourceTitleStyle = {
    fontSize: '1.5em',
    margin: '10px 0',
};

const resourceDescriptionStyle = {
    fontSize: '1em',
    margin: '10px 0',
};

const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
};

const resourceLinkStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none' as const,
    cursor: 'pointer' as const,
};

const shareButtonStyle = {
    padding: '8px 16px',
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
        resourceBoxStyle: {
            textAlign: 'center' as const,
        },
    },
};
