import React from 'react';
import './About.css';
import profile from '../assets/PICfront.jpeg';          // replace with your photo

function About() {
    return (
        <section id="about" className="about">
            <div className="about__inner">
                <img src={profile} alt="Samiksha Trivedi" className="about__img" />

                <div className="about__text">
                    <h2 className="section‑title">About Me</h2>
                    <p>
                        I’m <span className="hl">Samiksha Trivedi</span>, a Full‑Stack Developer
                        with a passion for building delightful web experiences. I’ve led
                        Google Developer Groups events, completed multiple full‑stack
                        bootcamps, and I love turning complex problems into elegant,
                        scalable solutions.
                    </p>

                    <p>
                        Outside of code you’ll find me mentoring peers, contributing to
                        open‑source, or curating playlists (ask me about my
                        <em> “Mast Magan” </em> loop 🎧).
                    </p>

                    <div className="about-buttons">
                        <a href="#projects" className="about-btn">View Projects</a>
                        <a
                            href="/Samiksha_Trivedi_Resume.pdf"
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
