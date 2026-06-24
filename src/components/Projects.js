import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Adopted Trails (Pet Adoption Backend)',
        description: 'Backend for a pet adoption platform with user-pet linking, secure CRUD, document & image uploads, custody transfer logic, and MongoDB integration.',
        tech: 'Node.js • TypeScript • MongoDB • Express',
        img: require('../assets/adopted_trails_backend.jpg'), // make sure you add this image in the correct path
        link: 'https://github.com/samikshatrivedi007/adoptedtails-backend'
    },
    {
        title: 'Indian Heritage & Culture',
        description: 'A comprehensive React + Next.js portal to showcase Indian heritage sites galleries, blogs, e‑commerce & travel booking(frontend only).',
        tech: 'React • TS •  CSS Modules',
        img: require('../assets/heritage_frontend.png'),       // replace with your image
        link: 'https://github.com/samikshatrivedi007/indian-heritage-culture-frontend'
    },
    {
        title: 'Blinkit‑style Grocery',
        description: 'Replica of a Blinkit-style grocery delivery app , including admin panel, user panel, cart, orders, Razorpay payments.',
        tech: 'Node • TS • JS • Express • MongoDB • React ',
        img: require('../assets/grocery_backend.jpg'),
        link: 'https://github.com/samikshatrivedi007/blink-Grocery-website'
    },
    {
        title: 'Queuelogy – Restaurant Frontend',
        description: 'A responsive and modern restaurant website frontend built to showcase a food brand with elegant UI, animated sections, and interactive menu display.',
        tech: 'React • TypeScript •  CSS • Responsive UI',
        img: require('../assets/restrau.png'), // ✅ Make sure this image is placed correctly
        link: 'https://github.com/samikshatrivedi007/Restraurent-web',
    },

    {
        title: 'Netflix Clone',
        description: 'Full‑stack clone with TMDB integration, JWT auth and Stripe billing.',
        tech: 'Next.js • Prisma • PostgreSQL',
        img: require('../assets/netflix.jpeg'),
        link: 'https://github.com/samikshatrivedi007/netflix-backend'
    },
    {
        title: 'mail-crawler',
        description: 'A Spring Boot application that automatically scans Gmail inboxes, extracts OTPs, order IDs, and links using regex patterns, and stores structured data in Google Sheets through secure OAuth 2.0 integration.',
        tech: 'Java • Spring Boot • Gmail API • Google Sheets API • OAuth 2.0 • Gradle',
        img: require('../assets/mailcrawler.png'),
        link: 'https://github.com/samikshatrivedi007/mail-crawler'
    },
    {
        title: 'CV Maker',
        description: 'Interactive resume builder with real-time preview, dynamic sections for experience, education and skills, and one-click PDF export for professional ATS-friendly resumes.',
        tech: 'HTML • CSS • JavaScript • PDF Generation',
        img: require('../assets/cv.png'),
        link: 'https://github.com/samikshatrivedi007/CV-builder'
    },
    {
        title: 'Hindi ASR Research Project',
        description: 'AI-powered Automatic Speech Recognition (ASR) research project focused on Hindi speech transcription using Whisper fine-tuning, WER evaluation, spelling correction, cleanup pipelines, and lattice-based performance analysis.',
        tech: 'Python • PyTorch • Hugging Face • Whisper • NLP • Librosa • Jupyter',
        img: require('../assets/hindi-asr.png'),
        link: 'https://github.com/samikshatrivedi007/Speech-AI-Hindi-ASR-Research-Project'
    }
];

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="section‑title">Projects</h2>

            <div className="projects__grid">
                {projects.map(({ title, description, tech, img, link }) => (
                    <article key={title} className="project">
                        <img src={img} alt={title} className="project__img" />

                        <div className="project__body">
                            <h3>{title}</h3>
                            <p className="project__desc">{description}</p>
                            <p className="project__tech">{tech}</p>

                            <a href={link} target="_blank" rel="noreferrer" className="btn btn--primary">
                                View Code
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
