import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  // Icon components as SVG
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
      background: 'linear-gradient(135deg, #5c005c 0%, #3a003a 100%)',
      padding: '100px 20px',
      minHeight: '100vh',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      fontSize: '2.8rem',
      color: '#fff',
      fontWeight: '700',
      position: 'relative'
    },
    
    contactContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      alignItems: 'start'
    },

    contactInfo: {
      color: '#ffd1ff',
      padding: '30px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    contactForm: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '30px',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    h3: {
      color: '#ff80ff',
      marginBottom: '20px',
      fontSize: '1.8rem',
      fontWeight: '600',
      margin: '0 0 20px 0'
    },
    paragraph: {
      marginBottom: '30px',
      lineHeight: '1.6',
      fontSize: '1.1rem',
      margin: '0 0 30px 0'
    },
    contactItem: {
      marginBottom: '25px'
    },
    h4: {
      margin: '0 0 5px 0',
      color: '#ff80ff',
      fontSize: '1.1rem',
      fontWeight: '600'
    },
    span: {
      color: '#ffd1ff',
      fontSize: '1rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '30px',
      flexWrap: 'wrap'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      borderRadius: '25px',
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#ff80ff',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: 'none'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#ff80ff',
      fontWeight: '500',
      fontSize: '1rem'
    },
    input: {
      width: '100%',
      padding: '15px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      fontSize: '1rem',
      background: 'rgba(255, 255, 255, 0.08)',
      color: '#fff',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '15px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      fontSize: '1rem',
      background: 'rgba(255, 255, 255, 0.08)',
      color: '#fff',
      transition: 'all 0.3s ease',
      minHeight: '150px',
      resize: 'vertical',
      boxSizing: 'border-box',
      fontFamily: 'inherit'
    },
    button: {
      padding: '15px 30px',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, #8a008a 0%, #6a006a 100%)',
      color: '#fff',
      boxShadow: '0 5px 15px rgba(138, 0, 138, 0.3)'
    }
  };
  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <div style={styles.contactContent}>
          
          <div style={styles.contactInfo}>
            <h3 style={styles.h3}>Let's Connect</h3>
            <p style={styles.paragraph}>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            <div style={styles.contactItem}>
              <h4 style={styles.h4}>Email</h4>
              <span style={styles.span}>niroshamadumali37@gmail.com</span>
            </div>

            <div style={styles.contactItem}>
              <h4 style={styles.h4}>Phone</h4>
              <span style={styles.span}>076-0232418</span>
            </div>

            <div style={styles.socialLinks}>
              <a 
                href="https://www.linkedin.com/in/nirosha-madhumali-a2325b333" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8a008a 0%, #6a006a 100%)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ff80ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/Madhu20021111" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8a008a 0%, #6a006a 100%)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ff80ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="GitHub"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.facebook.com/nirosha.madumali.7547" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8a008a 0%, #6a006a 100%)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ff80ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Facebook"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div style={styles.contactForm}>
            <div style={styles.formGroup}>
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
            </div>

            <div style={styles.formGroup}>
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
            </div>

            <div style={styles.formGroup}>
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
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.button,
                background: isSubmitting ? 'linear-gradient(135deg, #6a006a 0%, #8a008a 100%)' : 'linear-gradient(135deg, #8a008a 0%, #6a006a 100%)',
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
              onClick={handleSubmit}
              disabled={isSubmitting}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #6a006a 0%, #8a008a 100%)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(138, 0, 138, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8a008a 0%, #6a006a 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(138, 0, 138, 0.3)';
                }
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;