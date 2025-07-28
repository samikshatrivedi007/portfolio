import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_sl18nrp",      // 🔁 Replace with yours
                "template_0er4cda",     // 🔁 Replace with yours
                form.current,
                "g1DFDJirajcEAVyd5"     // 🔁 Replace with yours
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setMessageSent(true);
                    form.current.reset();

                    // ✅ Hide the success message after 4 seconds
                    setTimeout(() => {
                        setMessageSent(false);
                    }, 4000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h2>Let’s Talk</h2>
                    <p>
                        I’m always open to discussing new projects, creative ideas or
                        opportunities to be part of your visions.
                    </p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> samikshatrivedi431@gmail.com</p>
                        <p><strong>Phone:</strong> +91 90XXXXXXXXX</p>
                        <p><strong>Location:</strong> Datia, Madhya Pradesh, India</p>
                    </div>
                </div>

                <div className="contact-right">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <input type="text" name="subject" placeholder="Subject" />
                        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
                        <button type="submit">Send Message</button>
                        {messageSent && <p style={{ color: "green" }}>Message sent successfully!</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
