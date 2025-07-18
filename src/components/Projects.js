import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Indian Heritage & Culture',
        description: 'A comprehensive React + Next.js portal to showcase Indian heritage sites, blogs, e‑commerce & travel booking.',
        tech: 'React • TS • MongoDB • Node • Tailwind',
        img: require('../assets/heritage.jpeg'),       // replace with your image
        link: 'https://github.com/Tech-and-Vibe/heritage'
    },
    {
        title: 'Blinkit‑style Grocery Backend',
        description: 'RESTful API with admin analytics, role‑based auth and Razorpay payments.',
        tech: 'Node • TS • Express • MongoDB',
        img: require('../assets/grocery.jpeg'),
        link: 'https://github.com/Tech-and-Vibe/blinkit-backend'
    },
    {
        title: 'Netflix Clone',
        description: 'Full‑stack clone with TMDB integration, JWT auth and Stripe billing.',
        tech: 'Next.js • Prisma • PostgreSQL',
        img: require('../assets/netflix.jpeg'),
        link: 'https://github.com/Tech-and-Vibe/netflix-clone'
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
