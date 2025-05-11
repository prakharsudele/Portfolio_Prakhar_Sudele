import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side: Message / Avatar / Style */}
        <div className="contact-left" data-aos="fade-right">
          <h2>Let’s Build Something Together 💡</h2>
          <p>
            Whether you have an idea, want to collaborate, or just want to say hi — I’m all ears.
            Drop me a message and let’s connect!
          </p>

          <div className="contact-boy-wrapper" data-aos="fade-up">
            <img src={`${import.meta.env.BASE_URL}contact_img.png`} alt="3D Boy" />
          </div>
        </div>

        {/* Right Side: Stylish Form */}
        <form
          className="contact-form-glow"
          action="https://formsubmit.co/prakharsudele36@gmail.com"
          method="POST"
          data-aos="fade-left"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit" className="send-btn">Send 🚀</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="contact-footer" data-aos="fade-up">
        <p>© {new Date().getFullYear()} Prakhar Sudele. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/prakharsudele" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/prakhar-sudele-261780250" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:prakharsudele36@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
