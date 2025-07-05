import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import "./Project.scss";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "./Allprojectfiles";
import Button from "../components/Button/Button";


function AllProjects() {
  return (
    <>
      <Helmet>
        <title>Umunu&apos;s Portfolio || Project Page</title>
      </Helmet>
      <Header />

      {projects.map((project) => (
        <section
          key={project.name}
          className={`section-container ${project.color} projects`}>
          <div className="container-fluid">
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
                  <img src={project.image} style={{ width: "100%" }} />
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
                <a href={project.link} target="_blank">
                  {project.link}
                </a>
                <Link to={project.code} style={{ display: "block" }}>
                  <Button>View Code Snippets</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default AllProjects;
