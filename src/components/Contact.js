import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_lygd3ab",    // ← Replace
        "template_zduyn1u",   // ← Replace
        form.current,
        "ebt_AMrojdexV1P_V"     // ← Replace
      )
      .then(
        () => {
          alert("🎉 Thank you! Your message has been sent successfully.");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  // --- ICONS & STYLES (unchanged) ---
  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const styles = {
    contact: {
      // background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      background: "#000000",
      padding: "100px 20px",
      minHeight: "100vh",
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },
    sectionTitle: {
      textAlign: "center",
      marginBottom: "50px",
      fontSize: "2.8rem",
      color: "#fff",
      fontWeight: "700",
      position: "relative",
    },
    underline: {
  content: "''",
  position: "absolute",
  bottom: "-15px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80px",
  height: "4px",
  backgroundColor: "#00d4ff", // Matching your Neon Cyan theme
  borderRadius: "2px",
},

    contactContent: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "40px",
      alignItems: "start",
    },

    contactInfo: {
      color: "#ffffff",
      padding: "95px",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    contactForm: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "30px",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },

    label: {
      display: "block",
      marginBottom: "8px",
      color: "#00d4ff",
      fontWeight: "500",
      fontSize: "1rem",
    },
    input: {
      width: "100%",
      padding: "15px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "8px",
      fontSize: "1rem",
      background: "rgba(255, 255, 255, 0.08)",
      color: "#fff",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "15px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "8px",
      fontSize: "1rem",
      background: "rgba(255, 255, 255, 0.08)",
      color: "#fff",
      minHeight: "150px",
      resize: "vertical",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    button: {
      padding: "15px 30px",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "1rem",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      background: "linear-gradient(135deg, #00d4ff 0%, #0ad2e8 100%)",
      color: "#fff",
      boxShadow: "0 5px 15px rgba(52, 197, 237, 0.3)",
    },
  };

  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <div style={{ position: 'relative', display: 'inline-block', left: '50%', transform: 'translateX(-50%)', marginBottom: '60px' }}>
        <h2 style={{ ...styles.sectionTitle, marginBottom: '0' }}>Get In Touch</h2>
        <div style={styles.underline}></div>
      </div>
        <div style={styles.contactContent}>
          {/* LEFT SIDE */}
          <div style={styles.contactInfo}>
            <h3 style={{ color: "#00d4ff", marginBottom: "30px", fontSize: "1.8rem" }}>
              Let’s Connect
            </h3>
            <p style={{ marginBottom: "30px", color: "#ffffff" }}>
              I'm always open to discussing new projects or creative ideas. Feel free to reach out!
            </p>

            <div>
              <h4 style={{ color: "#00d4ff" }}>Email</h4>
              <span style={{ color: "#ffffff" }}>niroshamadumali37@gmail.com</span>
            </div>

            <div style={{ marginTop: "20px" }}>
              <h4 style={{ color: "#00d4ff" }}>Phone</h4>
              <span style={{ color: "#ffffff" }}>076-0232418</span>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form ref={form} onSubmit={handleSubmit} style={styles.contactForm}>
            <label style={styles.label}>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <label style={styles.label}>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <label style={styles.label}>Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...styles.button,
                background: isSubmitting
                  ? "linear-gradient(135deg, #00d4ff 0%, #00d4ff 100%)"
                  : "linear-gradient(135deg, #00d4ff 0%, #00d4ff 100%)",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
