import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaJava
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiLeetcode, SiPython } from 'react-icons/si';
import './Skills.css';

const skills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React / Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js / Express' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'SQL / MySQL' },
    { icon: <FaDatabase />, name: 'Database Mgmt' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiLeetcode />, name: 'DSA / Leetcode' },
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Tech Stack</h2>

            <div className="skills__marquee">
                <div className="skills__track">
                    {skills.map(({icon, name}, index) => (
                        <div className="skill" key={index}>
                            <span className="skill__icon">{icon}</span>
                            <span className="skill__name">{name}</span>
                        </div>
                    ))}
                    {/* Duplicate once for infinite loop */}
                    {skills.map(({icon, name}, index) => (
                        <div className="skill" key={index + '-dup'}>
                            <span className="skill__icon">{icon}</span>
                            <span className="skill__name">{name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Skills;
