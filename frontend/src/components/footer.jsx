import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        paddingTop: "100px",
        paddingBottom: "60px",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 mb-5">
            <h3 style={{
              fontWeight: "900",
              fontSize: "40px",
              marginBottom: "25px",
              letterSpacing: "2px",
              color: "white"
            }}>
             Furniture Haven
            </h3>
            <p style={{
              color: "#ccc",
              lineHeight: "2",
              fontSize: "20px",
              letterSpacing: "1px"
            }}>
              Discover elegant and modern furniture crafted with quality 
              materials. We bring comfort, luxury, and durability to your home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-5">
            <h5 style={{
              fontWeight: "700",
              fontSize: "40px",
              marginBottom: "30px",
              color: "#fff",
              letterSpacing: "2px",
            }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/" className="footer-link">About Us</a></li>
              <li><a href="/" className="footer-link">Shop</a></li>
              <li><a href="/" className="footer-link">Contact</a></li>
              <li><a href="/" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-5">
            <h5 style={{
              fontWeight: "700",
              fontSize: "40px",
              marginBottom: "30px",
              color: "#fff",
              letterSpacing: "2px",
            }}>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Sofa</a></li>
              <li><a href="/" className="footer-link">Bed</a></li>
              <li><a href="/" className="footer-link">Almirah</a></li>
              <li><a href="/" className="footer-link">Dining Table</a></li>
              <li><a href="/" className="footer-link">Office Furniture</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-5">
            <h5 style={{
              fontWeight: "700",
              fontSize: "40px",
              marginBottom: "25px",
              color: "#fff",
              letterSpacing: "2px",
            }}>Contact Us</h5>
            <p style={{ fontSize: "25px", letterSpacing: "1px" }}>📍 Delhi</p>
            <p style={{ fontSize: "25px", letterSpacing: "1px" }}>📞 8839693702</p>
            <p style={{ fontSize: "25px", letterSpacing: "1px" }}>📧 jayushi892@gmail.com</p>

            <div className="mt-4">
              <h6 style={{ fontWeight: "600", marginBottom: "15px", fontSize: "25px", letterSpacing: "1px" }}>
                Subscribe Newsletter
              </h6>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mb-2"
                style={{
                  background: "#ffffff20",
                  color: "#fff",
                  border: "none",
                  fontSize: "25px",
                  padding: "10px",
                  letterSpacing: "1px"
                }}
              />
              <button className="btn btn-info w-100 fw-bold" style={{ fontSize: "20px", letterSpacing: "1px", padding: "10px" }}>
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#ffffff30", marginTop: "40px" }} />

        {/* Bottom Bar */}
        <div className="text-center pt-3">
          <small style={{ color: "#ccc", letterSpacing: "1px", fontSize: "25px" }}>
            © 2026 Jayushi Furniture | All Rights Reserved
          </small>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .footer-link {
            color: #ddd;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
            transition: all 0.3s ease;
            font-size: 26px;
            letter-spacing: 1px;
          }

          .footer-link:hover {
            color: #00f2fe;
            padding-left: 6px;
          }

          input::placeholder {
            color: #ccc;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
