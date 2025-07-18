import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const skills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React / Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js / Express' },
    { icon: <FaDatabase />, name: 'MongoDB / SQL' }
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2 className="section‑title">Tech Stack</h2>

            <div className="skills__grid">
                {skills.map(({ icon, name }) => (
                    <div key={name} className="skill">
                        <span className="skill__icon">{icon}</span>
                        <span className="skill__name">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
