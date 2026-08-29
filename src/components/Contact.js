import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaLinkedin, 
  FaGithub, 
  FaMedium, 
  FaFacebook,
  FaCheckCircle,
  FaCopy,
  FaUser,
  FaCommentDots
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("niroshamadumali37@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_lygd3ab",
        "template_zduyn1u",
        form.current,
        "ebt_AMrojdexV1P_V"
      )
      .then(
        () => {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      {/* Ambient Radial Background Glows */}
      <div className="contact-ambient-glow glow-c1"></div>
      <div className="contact-ambient-glow glow-c2"></div>

      <div className="container">
        {/* Header */}
        <div className="contact-header-wrapper">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind, an opportunity to discuss, or just want to connect? Let’s create something exceptional together.
          </p>
        </div>

        <div className="contact-content-grid">
          {/* LEFT SIDE: Contact Details & Social Links */}
          <div className="contact-info-panel">
            <div className="info-panel-glow"></div>
            
            <div className="info-header">
              <span className="info-badge">Direct Communication</span>
              <h3 className="info-title">Let’s Start a Conversation</h3>
              <p className="info-desc">
                Feel free to reach out via the form, send an email directly, or connect on social networks. I am always open to exploring new engineering opportunities, collaborations, and creative endeavors.
              </p>
            </div>

            <div className="contact-cards-list">
              {/* Email Card */}
              <div className="contact-info-card">
                <div className="contact-card-icon-box email-icon-box">
                  <FaEnvelope />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Email Address</span>
                  <a 
                    href="mailto:niroshamadumali37@gmail.com" 
                    className="card-value-link"
                  >
                    niroshamadumali37@gmail.com
                  </a>
                </div>
                <button 
                  className="copy-btn" 
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  type="button"
                >
                  {copiedEmail ? <FaCheckCircle className="copied-icon" /> : <FaCopy />}
                  <span className="copy-tooltip">{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-info-card">
                <div className="contact-card-icon-box whatsapp-icon-box">
                  <FaWhatsapp />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">WhatsApp / Phone</span>
                  <a 
                    href="https://wa.me/94760232418" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-value-link"
                  >
                    +94 76 023 2418
                  </a>
                </div>
                <a 
                  href="https://wa.me/94760232418" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="direct-chat-btn"
                >
                  Chat
                </a>
              </div>

              {/* Location Card */}
              <div className="contact-info-card">
                <div className="contact-card-icon-box location-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Location & Availability</span>
                  <span className="card-value-plain">Sri Lanka (UTC +5:30) • Open to Remote & Global Work</span>
                </div>
              </div>
            </div>

            {/* Social Connect Strip */}
            <div className="contact-socials-wrapper">
              <span className="socials-label">Connect across platforms:</span>
              <div className="contact-social-icons">
                <a 
                  href="https://linkedin.com/in/nirosha-madhumali-a2325b333" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn linkedin-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/Madhu20021111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn github-btn"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://medium.com/@niroshamadumali37" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn medium-btn"
                  aria-label="Medium"
                >
                  <FaMedium />
                </a>
                <a 
                  href="https://www.facebook.com/nirosha.madhumali.7547" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn facebook-btn"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Contact Form */}
          <div className="contact-form-panel">
            <div className="form-panel-glow"></div>

            <div className="form-header">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-subtitle">Fill in your details and I’ll get back to you as soon as possible.</p>
            </div>

            {/* Status Notifications */}
            {submitStatus === "success" && (
              <div className="form-alert success-alert">
                <FaCheckCircle className="alert-icon" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="form-alert error-alert">
                <span>Oops! Failed to send the message. Please try again or reach out directly via email.</span>
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="cyber-contact-form">
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  <FaUser className="input-icon" /> Your Name
                </label>
                <div className="input-wrapper">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="cyber-input"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  <FaEnvelope className="input-icon" /> Your Email
                </label>
                <div className="input-wrapper">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e.g. johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="cyber-input"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  <FaCommentDots className="input-icon" /> Your Message
                </label>
                <div className="input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message or project requirements here..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="cyber-textarea"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`cyber-submit-btn ${isSubmitting ? "loading" : ""}`}
              >
                <FaPaperPlane className="send-icon" />
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
