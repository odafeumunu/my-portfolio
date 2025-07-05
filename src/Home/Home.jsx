import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import "./Home.scss";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { motion } from "motion/react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "remixicon/fonts/remixicon.css";
import Photo from "../assets/photo.webp";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import ser1 from "../assets/ser1.webp";
import ser2 from "../assets/ser2.webp";
import ser3 from "../assets/ser3.webp";
import ser4 from "../assets/ser4.webp";
import ser5 from "../assets/ser5.webp";
import ser6 from "../assets/ser6.webp";
import Skill from "../components/Skills/Skill";
import SwiperComp from "../components/SwiperComp/SwiperComp";
import { SwiperSlide } from "swiper/react";
import Review from "../components/Review/Review";
import CounterOnScroll from "../components/Counter/Counter"

const services = [
  {
    id: 1,
    image: ser1,
    title: "Brand Logo",
    content:
      "This project showcases my ability to create impactful brand identities. I'm proud of this logo design, which effectively represents the client's brand values",
    month: "Aug",
    year: 23,
  },
  {
    id: 2,
    image: ser2,
    title: "Brand Logo",
    content:
      "I designed this logo for a client, and it's rewarding to see their brand flourish. A well-crafted logo truly contributes to a brand's success and growth.",
    month: "Jan",
    year: 24,
  },
  {
    id: 3,
    image: ser4,
    title: "Brand Logo",
    content:
      "This logo design project was a collaborative effort, resulting in a unique brand identity. I enjoyed working closely with the client to bring their vision to life.",
    month: "April",
    year: 22,
  },
  {
    id: 4,
    image: ser3,
    title: "3D Mockup",
    content:
      "I specialize in creating high-fidelity mockups that bridge abstract concepts and tangible realities, facilitating seamless communication and collaboration with clients through realistic design representations.",
    month: "Dec",
    year: 21,
  },
  {
    id: 5,
    image: ser5,
    title: "Flyer Design",
    content:
      "Successfully designed and produced a visually appealing and informative flyer that effectively communicated the client's message and achieved their marketing goals.",
    month: "July",
    year: 21,
  },
  {
    id: 6,
    image: ser6,
    title: "Banner Design",
    content:
      "I specialize in creating high-fidelity designs that turn abstract concepts into clear, tangible realities, ensuring seamless communication and collaboration with clients throughout the process.",
    month: "Sept",
    year: 24,
  },
];

const projects = [
  { id: 1, image: img1, link: "/project/hotel", text: "Hotel" },
  { id: 2, image: img5, link: "/project/lendsqr", text: "Lendsqr" },
  { id: 3, image: img4, link: "/project/lifestyle", text: "Lifestyle" },
  { id: 4, image: img3, link: "/project/crypto", text: "Crypto" },
  { id: 5, image: img2, link: "/project/hospital", text: "Hospital" },
  { id: 6, image: img6, link: "/project/car", text: "Car" },
];

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 75 },
  { name: "React", percentage: 80 },
  { name: "TypeScript", percentage: 60 },
  { name: "Python", percentage: 80 },
  { name: "Django", percentage: 80 },
  { name: "Flask", percentage: 80 },
  { name: "Bootstraps", percentage: 85 },
  { name: "SCSS", percentage: 80 },
];

const summaries = [
  { id: 1, numb: 50, project: "Happy Clients" },
  { id: 2, numb: 150, project: "Projects Done" },
  { id: 3, numb: 4, project: "Years of Experience" },
];

const myDivs = [14, 20, 18, 11, 10, 14, 15];

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A CREATIVE FRONTEND WEB DEVELOPER",
        "AN INNOVATIVE WEB DESIGNER",
        "AN EXPERIENCED WEB DEVELOPER",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Umunu&apos;s Portfolio || Home Page</title>
      </Helmet>
      <Header />

      <div className="hero">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="flex-content">
          <div>
            {myDivs.map((i) => (
              <div key={i} className="animate" style={{ "--i": i }} />
            ))}
          </div>
        </motion.div>
        <div className="container hero-container">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 0.5,
            }}>
            Nice to meet you
          </motion.span>
          <motion.h1
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
              duration: 0.5,
            }}>
            I&apos;m Umunu <br />
            Odafe Peter
          </motion.h1>
          <p ref={el}></p>
        </div>
      </div>

      <section className="section-container about-container">
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
            <h2 style={{ textAlign: "left" }}>About Me</h2>
            <p>
              A full-stack web developer skilled in HTML, CSS, JavaScript, and
              React, as well as Python, Django and Flask. I’ve completed
              numerous website projects for brands and small businesses,
              specializing in responsive design and dynamic functionality. I’m
              passionate about creating user-friendly interfaces and
              continuously improving my craft. Let’s collaborate! <br />
              <br />
              I’m passionate about crafting visually engaging and functional web
              experiences. I love turning ideas into user-friendly designs and
              experinces that leave a lasting impression. With a strong focus on
              creativity and continuous learning, I strive to make every project
              unique and impactful.
            </p>
            <Link to="/about">
              <Button>See More</Button>
            </Link>
            <a href="https://www.linkedin.com/in/odafe-umunu/" target="_blank">
              <Button>Connect via LinkedIn</Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section-container-dark skill-container">
        <div className="container">
          <h2>My Skills</h2>
          <div className="type-wrap" style={{ textAlign: "center" }}>
            <p className="p-text">
              I have a strong foundation in core web development technologies,
              including HTML, CSS, JavaScript, React, Python, Django and Flask. I am proficient in CSS
              preprocessors like SCSS and have experience with front-end
              frameworks such as Bootstrap and React. I am also familiar with
              TypeScript and have basic knowledge of PHP. I am constantly
              learning and expanding my skillset to stay updated with the latest
              industry trends.
            </p>
          </div>
          <div className="row">
            {skills.map((skill) => (
              <Skill
                key={skill.name}
                skillName={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-container project-container"
        style={{ paddingBottom: "30px" }}>
        <div className="container">
          <h2>My Projects</h2>
          <p className="p-text">
            I am passionate about crafting engaging and user-centric web
            experiences. Here is a diverse range of projects that demonstrate my
            proficiency in frontend development principles and a strong
            understanding of user needs.
          </p>
        </div>
        <div className="row">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: true }}
              className="project">
              <div className="project-image">
                <img src={project.image} alt="" />
              </div>
              <Link to={project.link} className="project-inner">
                <h3>
                  {project.text} <br className="break" /> Website
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
        <div
          className="see-more"
          style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/allproject">
            <Button>See All</Button>
          </Link>
        </div>
      </section>

      <section className="section-container-dark service-container">
        <div className="container-fluid">
          <h2>Services</h2>
          <p className="p-text">
            UTech offer a wide range of services, from stunning designs to
            robust web development solutions. Committed to staying ahead of the
            curve, I deliver cutting-edge solutions tailored to your specific
            needs.
          </p>
          <div className="row">
            <SwiperComp
              spaceBetween={20}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}>
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.7)",
                      scale: 0.98,
                    }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 200,
                    }}
                    className="service">
                    <div className="img-text">
                      <img src={service.image} alt="" />
                      <div className="txt">
                        <h4>{service.month}</h4>
                        <span>&apos;{service.year}</span>
                      </div>
                    </div>
                    <div className="service-inner-text">
                      <h3>{service.title}</h3>
                      <p>{service.content}</p>
                      <Link to="/service">See more</Link>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </SwiperComp>
          </div>
        </div>
      </section>

      <Review />

      <section className="section-container-dark summary-container">
        <div className="container">
          <div className="row">
            {summaries.map((summary) => (
              <CounterOnScroll
                key={summary.id}
                numb={summary.numb}
                project={summary.project}
              />
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Home;
