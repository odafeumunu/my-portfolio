import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import "./Service.scss";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { motion } from "motion/react";
import "remixicon/fonts/remixicon.css";
import graphic from "../assets/graphic.webp";
import dev from "../assets/dev.webp";
import dev2 from "../assets/dev2.webp";
import Review from "../components/Review/Review";

const services = [
  {
    id: 1,
    title: "Web Design",
    subtitle: "Building Beautiful Interfaces",
    image: dev,
    desc: "At uTech, we specialize in crafting exceptional web design solutions tailored to meet the unique needs of our clients. With years of experience in the industry, we have honed our skills in delivering visually stunning, user-friendly, and functional websites that leave a lasting impression. Our clients love the dedication, creativity, and professionalism we bring to every project, ensuring their visions come to life. Whether you need a personal portfolio, a business website, or an e-commerce platform, uTech is here to turn your ideas into impactful digital experiences.",
    quote:
      "Good design is not just what it looks like and feels like. Design is how it works. ~Steve Jobs",
  },
  {
    id: 2,
    title: "Graphics Design",
    subtitle: "Creative. Impactful. Timeless",
    image: graphic,
    desc: "At uTech, we offer top-notch graphics design services that bring your brand's vision to life. With years of experience in creating visually captivating designs, we specialize in crafting logos, flyers, banners, and more that resonate with your audience. Our clients trust us for our creativity, attention to detail, and commitment to delivering designs that make a lasting impact. Whether you're building a new brand identity or refreshing your visuals, uTech is here to create designs that tell your story beautifully.",
    quote:
      "Design is the silent ambassador of your brand, and great graphics speak louder than words ~Paul Rand",
  },
  {
    id: 3,
    title: "Web Dev Tutorials",
    subtitle: "Learn. Build. Succeed.",
    image: dev2,
    desc: "At uTech, we provide engaging and practical online tutorials designed to help you master web development from anywhere in the world. Our step-by-step lessons cover essential topics like HTML, CSS, JavaScript. With years of experience and a passion for teaching, we ensure our tutorials are clear, actionable, and tailored to real-world applications. Whether you’re starting your journey or enhancing your skills, uTech's online tutorials are here to guide you every step of the way.",
    quote:
      "Every great developer starts as a beginner—learn, code, and create your future. ~Umunu Odafe Peter",
  },
];

function Service() {
  return (
    <>
      <Helmet>
        <title>Umunu&apos;s Portfolio || Service Page</title>
      </Helmet>
      <Header />

      <section className="section-container">
        <div className="container">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            viewport={{ once: true }}
            className="row">
            <h2 style={{ textAlign: "left" }}>uTech</h2>
            <p className="p-text">
              My brand{" "}
              <span
                style={{ fontSize: "1rem", color: "#00ccff", fontWeight: 700 }}>
                uTech
              </span>{" "}
              is committed to providing innovative and tailored solutions to
              every digital challenge. With over three years of experience in
              the industry, we specialize in turning ideas into reality,
              seamlessly blending design and development to deliver exceptional
              digital experiences. <br />
              <br />
              From creating visually stunning designs to building functional and
              responsive websites, uTech is your trusted partner for all things
              digital. Our mission is to ensure every project not only meets but
              exceeds expectations, staying true to our slogan, Always on Point.
              Whether you need a creative design, a robust web solution, or a
              combination of both,{" "}
              <span
                style={{ fontSize: "1rem", color: "#00ccff", fontWeight: 700 }}>
                uTech
              </span>{" "}
              is here to proffer solutions that work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container-dark service">
        <div className="container">
          <h2>Services I Offer</h2>
          <p className="p-text">
            UTech offer a wide range of services, from stunning designs to
            robust web development solutions. Committed to staying ahead of the
            curve, I deliver cutting-edge solutions tailored to your specific
            needs.
          </p>
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="row-inner">
                <motion.div
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  viewport={{ once: true }}
                  className="image-col">
                  <img src={service.image} alt="" />
                  <i style={{ display: "block", marginTop: "15px" }}>
                    {service.quote}
                  </i>
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
                  className="text-col">
                  <h3>{service.title}</h3>
                  <span>{service.subtitle}</span>
                  <p>{service.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Review />

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Service;
