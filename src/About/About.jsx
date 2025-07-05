import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import "./About.scss";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { motion } from "motion/react";
import "remixicon/fonts/remixicon.css";
import Photo from "../assets/photo.webp";
import Button from "../components/Button/Button";

const vids = [
  "https://www.youtube.com/embed/NYcNEr038xM?si=gJx2wsoSg7YARFmr",
  "https://www.youtube.com/embed/cNYK10KPMu8?si=bQuidE4jlwWJgd36",
  "https://www.youtube.com/embed/JGwKr3k4TIs?si=t6Ctls7BQKWrvv4Q",
];



function About() {

  return (
    <>
      <Helmet>
        <title>Umunu&apos;s Portfolio || About Me Page</title>
      </Helmet>
      <Header />

      <section className="section-container">
        <div className="container">
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            viewport={{ once: true }}
            className="row">
            <h2 style={{ textAlign: "left" }}>About Me</h2>
            <p className="p-text">
              Hi there! I’m Umunu Odafe Peter, a frontend developer passionate
              about building visually stunning and user-friendly web
              experiences. With expertise in HTML, CSS, SCSS, JavaScript, React,
              and TypeScript, I specialize in creating responsive designs and
              dynamic functionality that bring ideas to life. <br />
              <br />
              I’m a creative problem-solver who loves turning concepts into
              reality, blending technical precision with artistic flair. Whether
              it’s crafting seamless user interfaces or exploring the latest
              tech trends, I thrive on challenges and continuous growth.
              <br />
              <br />
              Let’s connect and create something exceptional together!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container-dark about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            viewport={{ once: true }}
            className="row">
            <div className="row-inner">
              <img src={Photo} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            viewport={{ once: true }}
            className="row">
            <h2 style={{ textAlign: "left" }}>Get To Know Me</h2>
            <p>
              I started my web development journey with a deep love for design
              and technology. For over 4 years, I’ve evolved into a passionate
              frontend developer dedicated to delivering seamless and engaging
              digital experiences. Skilled in HTML, CSS, SCSS, Bootstrap,
              JavaScript, React, and TypeScript, I take pride in crafting
              responsive designs and adding dynamic functionality to elevate
              user experiences. <br />
              <br />
              With over 150 successful frontend web projects under my belt, I’ve
              honed my ability to create solutions that are not just visually
              appealing but also highly functional. My work ranges from building
              sleek, modern websites to integrating advanced interactivity that
              keeps users engaged. I’m constantly exploring new technologies and
              refining my skills to ensure my work remains at the cutting edge
              of web development.
              <br />
              <br />I am particularly passionate about designing user-friendly
              interfaces that resonate with audiences, prioritizing both
              aesthetics and usability. Beyond technical expertise, I bring a
              creative mindset and an unwavering commitment to excellence,
              striving to make every project unique and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container youtube">
        <div className="container-fluid">
          <h2>Youtube</h2>
          <p className="p-text">
            I enjoy sharing my knowledge through YouTube tutorials, showcasing
            how I create responsive designs and functional web applications.
            Explore these videos to gain insights into my work and web
            development process!
          </p>

          <div className="row">
            {vids.map((vid) => (
              <div className="row-inner" key={vid}>
                <iframe
                  height="315"
                  src={vid}
                  loading="lazy"
                  target="_blank"
                  allowFullScreen></iframe>
              </div>
            ))}
          </div>
          <a
            href="https://www.youtube.com/@umunu_odafe"
            style={{ display: "block", textAlign: "center" }}>
            <Button>More Videos</Button>
          </a>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default About;
