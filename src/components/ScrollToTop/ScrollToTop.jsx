import { useState,useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import "./ScrollToTop.scss";

function ScrollToTop (){

    const [isReveal, setIsReveal] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 100) {
          setIsReveal(true);
        } else {
          setIsReveal(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
      });
    };


    return (
      <>
        <div
          className={`to-top ${isReveal ? "reveal" : ""}`}
          onClick={scrollToTop}>
          <i className="ri-arrow-up-double-line"></i>
        </div>
      </>
    );
}
export default ScrollToTop;