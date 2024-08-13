import React from 'react';

interface TeamMemberProps {
    name: string;
    position: string;
    message: string;
    image: string;
    linkedin: string;
    email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, message, image, linkedin, email }) => (
    <div style={memberBoxStyle}>
        <img src={image} alt={name} style={memberImageStyle} />
        <div style={textContainerStyle}>
            <h3 style={memberNameStyle}>{name}</h3>
            <p style={memberPositionStyle}>{position}</p>
            <p style={memberMessageStyle}>{message}</p>
            <div style={contactButtonsStyle}>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" style={contactButtonStyle}>LinkedIn</a>
                <a href={`mailto:${email}`} style={contactButtonStyle}>Email</a>
            </div>
        </div>
    </div>
);

export default function TeamPage() {
    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <div style={headerContentStyle}>
                    <img src="/logo.jpg" alt="Resources and Updates Logo" style={logoStyle} />
                    <h1 style={headerTitleStyle}>Resources and Updates</h1>
                </div>
                <nav style={navStyle}>
                    <a href="/" style={navLinkStyle}>Home</a>
                    <a href="/#about" style={navLinkStyle}>About</a>
                    <a href="https://resourcesandcarrier.online/#services" style={navLinkStyle}>Services</a>
                    <a href="https://resourcesandcarrier.online/#contact" style={navLinkStyle}>Contact</a>
                </nav>
            </header>

            <main style={mainContentStyle}>
                <h2 style={subHeaderStyle}>Meet Our Team</h2>
                <div style={teamContainerStyle}>
                    <TeamMember
                        name="Rohit Kumar Yadav"
                        position="Founder"
                        message="Leading the team and overseeing all operations. Passionate about technology and dedicated to making a positive impact through our community."
                        image="/rohit.jpg"
                        linkedin="https://www.linkedin.com/in/rohitkumaryadav-rky/"
                        email="rohitkuyada@gmail.com"
                    />
                    <TeamMember
                        name="Avinash Singh"
                        position="Advisor"
                        message="Providing guidance and support for the development and growth of our community. Experienced in various aspects of technology and management."
                        image="/avinash.jpeg"
                        linkedin="https://www.linkedin.com/in/avinash-singh-071b79175/"
                        email="avinashmichael201199@gmail.com"
                    />
                    <TeamMember
                        name="Aditya Upadhyay"
                        position="Supporter"
                        message="Offering valuable support and feedback to help us improve and grow. Always ready to assist with any challenges that arise."
                        image="/aditya.jpeg"
                        linkedin="https://www.linkedin.com/in/iamadityaupadhyay/"
                        email="uaditya219@gmail.com"
                    />
                    <TeamMember
                        name="Manish Patel"
                        position="Supporter"
                        message="Contributing to the community with insights and suggestions. Committed to helping us achieve our goals and providing ongoing support."
                        image="/manish.jpeg"
                        linkedin="https://www.linkedin.com/in/manish-patel-4b0975250"
                        email="manishpatelup32@gmail.com"
                    />
                </div>
            </main>

            <footer style={footerStyle}>
                <p>Join our community for more updates!</p>
                <div style={socialLinksStyle}>
                    <a href="https://linkedin.com/company/resources-and-updates/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>LinkedIn</a>
                    <a href="https://whatsapp.com/channel/0029VaVd6px8KMqnZk7qGJ2t" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>WhatsApp Channel</a>
                    <a href="https://chat.whatsapp.com/DbHNlqyUrjX3TaRFhcAm2B" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>WhatsApp Group</a>
                </div>
                <p style={footerTextStyle}>For inquiries, email us at <a href="mailto:resourcesandupdates@gmail.com" style={linkStyle}>resourcesandupdates@gmail.com</a></p>
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

const teamContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    gap: '20px',
};

const memberBoxStyle = {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
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

const memberImageStyle = {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
};

const textContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
};

const memberNameStyle = {
    fontSize: '1.5em',
    margin: '10px 0',
};

const memberPositionStyle = {
    fontSize: '1.2em',
    color: '#555',
};

const memberMessageStyle = {
    fontSize: '1em',
    margin: '10px 0',
};

const contactButtonsStyle = {
    marginTop: '10px',
};

const contactButtonStyle = {
    padding: '8px 16px',
    margin: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none' as const,
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
        memberBoxStyle: {
            flexDirection: 'column' as const,
            textAlign: 'center' as const,
        },
        memberImageStyle: {
            marginBottom: '15px',
        },
        textContainerStyle: {
            alignItems: 'center' as const,
        },
    },
};
