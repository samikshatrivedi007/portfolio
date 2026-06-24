import React from 'react';
import './About.css';

import profile from '../assets/profile.png';          // replace with your photo

function About() {
    return (
        <section id="about" className="about">
            <div className="about__inner">
                <img src={profile} alt="Samiksha Trivedi" className="about__img" />

                <div className="about__text">
                    <h2 className="section‑title">About Me</h2>
                    <p>
                        I'm a recent B.Tech graduate in Computer Science & Engineering (AI/ML) with a passion for building scalable software solutions and exploring emerging technologies. I have hands-on experience in Full Stack Development, Backend Engineering, AI/ML research, and REST API development through internships and academic projects.

                        During my journey, I have worked with technologies such as Java, Spring Boot, React, Node.js, TypeScript, MongoDB, Python, and AI tools to build real-world applications. I enjoy solving complex problems, learning new technologies, and creating impactful digital solutions.

                        Currently, I am seeking Software Development, Backend Engineering, and Full Stack opportunities where I can contribute, learn, and grow as an engineer.

                    </p>

                    <p>
                        Outside of code you’ll find me mentoring peers, contributing to
                        open‑source, or curating playlists (ask me about my
                        <em> “Mast Magan” </em> loop 🎧).
                    </p>

                    <div className="about-buttons">
                        <a href="#projects" className="about-btn">View Projects</a>
                        <a
                            href="./samiksha_Trivedi_Resume.pdf"
                            download="Samiksha_Trivedi_Resume.pdf"
                            className="about-btn"
                        >
                            Download Resume
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default About;
