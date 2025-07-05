import "./Footer.scss";
import iconPin2 from "../../assets/icon-pin-2.png";
import iconPhone2 from "../../assets/icon-phone-2.png";
import BigIconWhite from "../../assets/big_icon_white.png";
import iconMail from "../../assets/icon-mail.png";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { motion } from "motion/react";

const FootLinks = [
  { id: 1, link: "/", text: "Home" },
  { id: 2, link: "/about", text: "About Me" },
  { id: 3, link: "/allproject", text: "All Projects" },
];

const socials = [
  { id: 1, link: "https://github.com/odafeumunu", icon: "ri-github-fill" },
  {
    id: 2,
    link: "https://www.linkedin.com/in/odafe-umunu/",
    icon: "ri-linkedin-box-fill",
  },
  { id: 3, link: "https://x.com/umunu_odafe", icon: "ri-twitter-x-line" },
  { id: 4, link: "https://wa.me/+2347036019770", icon: "ri-whatsapp-fill" },
  {
    id: 5,
    link: "https://www.youtube.com/@umunu_odafe",
    icon: "ri-youtube-fill",
  },
];

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="row-inner">
                <img src={iconPin2} alt="Location Icon" />
                <p>
                  Lagos State / Ogun State,
                  <br />
                  Nigeria
                </p>
              </div>
              <div className="row-inner">
                <img src={iconPhone2} alt="Phone Icon" />
                <p>
                  Call Me Now at
                  <br />
                  +234 703 601 9770
                </p>
              </div>
              <div className="row-inner last-row">
                <img src={iconMail} alt="Mail Icon" />
                <p>
                  Email at
                  <br />
                  <a href="mailto:odafeumunu@gmail.com">odafeumunu@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-body">
          <div className="footer-1">
            <div className="container">
              <div className="row">
                <div className="row-inner about-thumb">
                  <motion.div
                    initial={{ scale: 0.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    }}
                    viewport={{ once: true }}
                    className="about-thumb-inner">
                    <img src={BigIconWhite} alt="Logo" />
                    <div className="about-thumb-line about-thumb-line-one"></div>
                    <div className="about-thumb-line about-thumb-line-two"></div>
                  </motion.div>
                </div>
                <div className="row-inner">
                  <form action="">
                    <p
                      style={{
                        lineHeight: 2.2,
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                      At uTech, my vision is to craft seamless designs—whether
                      in graphics or web development—that combine functionality
                      with aesthetics. I am driven to proffer innovative
                      solutions to every digital challenge, ensuring every
                      project reflects my commitment to excellence and my
                      slogan: &quot;Always on Point.&quot; <br />
                      Let’s Colaborate!, <Link to="/contact" style={{ color: "#00ccff",textDecoration: "underline" }}>Contact</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <div className="container">
              <div className="row">
                <div className="row-inner">
                  <div className="links rem">
                    {FootLinks.map((FootLink) => (
                      <Link key={FootLink.id} to={FootLink.link}>
                        {FootLink.text}
                      </Link>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
                    <sup>&copy;</sup>2025 All rights reserved | UMUNU Odafe
                    Peter
                  </p>
                </div>
                <div className="row-inner">
                  <h4 className="rem">Social</h4>
                  <div className="social-link">
                    {socials.map((social) => (
                      <a key={social.id} href={social.link}>
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
