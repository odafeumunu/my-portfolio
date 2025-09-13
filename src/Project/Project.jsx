import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom"; // Import to access URL params
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "./Allprojectfiles";
import "remixicon/fonts/remixicon.css";
import "./Project.scss";
import codeImg from "../assets/codeimg.webp";

const codeImages = [{ img: codeImg }, { img: codeImg }, { img: codeImg }];

function Project() {
  const { name } = useParams();
  // Find the project by name 
  const project = projects.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!project) {
    return <div>Project not found!</div>; // In case the project is not found
  }

  return (
    <>
      <Helmet>
        <title>{project.name} || Project Page</title>
      </Helmet>
      <Header />

      <section className={`section-container ${project.color} projects`}>
        <div className="container-fluid">
          <div
            className="top-link"
            style={{ display: "flex", alignItems: "center" }}>
            <Link style={{ color: "#00ccff" }} to="/allproject">
              All Projects
            </Link>
            <i className="ri-arrow-right-s-line"></i>
            <p>{project.name}</p>
          </div>
          <div className="content-flex">
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
                <img
                  src={project.image}
                  style={{ width: "100%" }}
                  alt={project.name}
                />
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
              <h3>{project.name} Website</h3>
              <p>
                {project.desc1}
                <br />
                <br />
                {project.desc2}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </motion.div>
          </div>
          <h2 style={{ margin: "100px 0 50px 0" }}>Code Snippets</h2>
          <p className="p-text" style={{ marginBottom: "50px" }}>
            This project combines various techniques to create a responsive and
            efficient web application. Below are the code snippets demonstrating
            key aspects of the project.
          </p>
          <div className="code-flex">
            {codeImages.map((codeImage) => (
              <motion.div
                key={codeImage.img}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: true }}
                className="c-image">
                <img src={codeImage.img} style={{ width: "100%" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Project;
