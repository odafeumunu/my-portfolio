import { useState, useEffect } from "react";
import "./Header.scss";
import LogoWhite from "../../assets/logo-white.webp";
import LogoCyan from "../../assets/logo-cyan.webp";
import { Link, NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";




const myLinks = [
  { id: 1, link: "/", linkText: "Home" },
  { id: 2, link: "/about", linkText: "About Me" },
  { id: 3, link: "/allproject", linkText: "All Projects" },
  { id: 4, link: "/service", linkText: "Services" },
  { id: 5, link: "/contact", linkText: "Contact" },
];

function Header() {

  // Header scroll reveal
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  // Toggle bar
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () =>{
    setIsVisible(true)
  }
  const handleClickClose = () => {
    setIsVisible(false);
  };

  // Dark and Light Theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = () =>{
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  }

  return (
    <>
      <div className="header">
        <div className={`container ${isSticky ? "sticky" : ""}`}>
          <div className="logo">
            <Link to="/">
              <img className="logo-white" src={LogoWhite} alt="logo-img" />
              <img className="logo-cyan" src={LogoCyan} alt="logo-img" />
            </Link>
          </div>
          <ul className={isVisible ? "show" : ""}>
            {myLinks.map((myLink) => (
              <>
                <li key={myLink.id}>
                  <NavLink
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    to={myLink.link}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }>
                    {myLink.linkText}
                  </NavLink>
                </li>
              </>
            ))}
          </ul> 
          <div className="right-side">
            <div className="light-dark" onClick={handleTheme}>
              <i className="ri-sun-fill one"></i>
              <i className="ri-moon-fill two"></i>
            </div>
            <div className="toogle">
              <i
                className={`ri-menu-3-line ${isVisible ? "hid" : "vis"}`}
                onClick={handleClick}></i>
              <i
                className={`ri-close-large-line ${isVisible ? "vis" : "hid"}`}
                onClick={handleClickClose}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
