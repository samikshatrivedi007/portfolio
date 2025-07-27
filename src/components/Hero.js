import React, { useEffect } from 'react';
import './Hero.css';

function Hero() {
    useEffect(() => {
        const canvas = document.getElementById('lineCanvas');
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const lines = Array(100).fill().map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            length: Math.random() * 50 + 20,
            speed: Math.random() * 1.5 + 0.5,
            angle: Math.random() * Math.PI * 2
        }));

        function drawLines() {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = 'rgba(0,255,0,0.5)';
            ctx.lineWidth = 1;

            lines.forEach(line => {
                const dx = Math.cos(line.angle) * line.length;
                const dy = Math.sin(line.angle) * line.length;

                ctx.beginPath();
                ctx.moveTo(line.x, line.y);
                ctx.lineTo(line.x + dx, line.y + dy);
                ctx.stroke();

                line.x += Math.cos(line.angle) * line.speed;
                line.y += Math.sin(line.angle) * line.speed;

                // Wrap around screen
                if (line.x > width) line.x = 0;
                if (line.x < 0) line.x = width;
                if (line.y > height) line.y = 0;
                if (line.y < 0) line.y = height;
            });

            requestAnimationFrame(drawLines);
        }

        drawLines();

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }, []);

    return (
        <div className="hero-container">
            <canvas id="lineCanvas"></canvas>
            <div className="hero-content">
                <h2>Hi, I'm Samiksha Trivedi</h2>
                <p>Full Stack Developer | Open Source Contributor | Tech Community Lead (GDG) | Intern @ Accilives</p>
                <a href="#projects" className="btn">See My Work</a>
            </div>
        </div>
    );
}

export default Hero;
