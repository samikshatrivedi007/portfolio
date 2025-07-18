import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer id="contact" className="footer">
            <p className="footer__cta">
                Have a project in mind? <span>Let’s build together!</span>
            </p>

            <div className="footer__social">
                <a
                    href="https://github.com/samikshatrivedi007"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/samiksha-trivedi-149a02263/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://twitter.com/samiksha_codes"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTwitter />
                </a>
            </div>

            <p className="footer__copy">
                © {new Date().getFullYear()} Samiksha Trivedi • Crafted with ☕ + 💻
            </p>
        </footer>
    );
}

export default Footer;
