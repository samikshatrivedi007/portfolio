import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Indian Heritage & Culture',
        description: 'A comprehensive React + Next.js portal to showcase Indian heritage sites galleries, blogs, e‑commerce & travel booking(frontend only).',
        tech: 'React • TS •  CSS Modules',
        img: require('../assets/heritage_frontend.png'),       // replace with your image
        link: 'https://github.com/samikshatrivedi007/indian-heritage-culture-frontend'
    },
    {
        title: 'Blinkit‑style Grocery Backend',
        description:' Backend API for a Blinkit-style grocery delivery app — includes  role‑based auth , cart, orders, admin panel, , Razorpay payments & product management, (Backend only).',
        tech: 'Node • TS • JS • Express • MongoDB',
        img: require('../assets/grocery_backend.jpg'),
        link: 'https://github.com/samikshatrivedi007/Grocery-Web-Backend-'
    },
    {
        title: 'Netflix Clone',
        description: 'Full‑stack clone with TMDB integration, JWT auth and Stripe billing.',
        tech: 'Next.js • Prisma • PostgreSQL',
        img: require('../assets/netflix.jpeg'),
        link: 'https://github.com/samikshatrivedi007/netflix-backend'
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
