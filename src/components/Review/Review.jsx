import client1 from "../../assets/client-1.webp";
import client2 from "../../assets/client-2.webp";
import client3 from "../../assets/client-3.webp";
import client4 from "../../assets/client-4.webp";
import SwiperComp from "../SwiperComp/SwiperComp";
import { SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import "remixicon/fonts/remixicon.css";
import "./Review.scss";


const reviews = [
  {
    id: 1,
    connect: "https://wa.me/+2349077651602",
    image: client1,
    name: "Debbie",
    title: "Fashion Desginer",
    title2: "UDEE Styles",
    desc: "If there were 100 star rating I would leave 110. I have been designing for some years and in business also and have never worked with such a talented person with a creative mind as this.",
    desc2:
      "Specializes in bespoke designs and timeless fashion, she crafts elegant pieces that showcase creativity, style, and individuality.",
  },
  {
    id: 2,
    connect: "https://wa.me/+2349024643953",
    image: client2,
    name: "Peace",
    title: "Jeweler",
    title2: "Cabri 'N' Access.",
    desc: "Hi Odafe, your graphic designs are topnotch and really catchy. I love them and I will do more work with you.",
    desc2:
      "Specializes in premium perfumes and elegant jewelry, she provides quality products that elevate style and confidence.",
  },
  {
    id: 3,
    connect: "https://wa.me/+2348067710016",
    image: client3,
    name: "Austine",
    title: "Software Engineer",
    title2: "Auztin Tech",
    desc: "Your work is amazing, you take your time to work. Your themes are creatively awesome. Odafe I will like to always work with you. Thanks",
    desc2:
      "Specializes in backend development with Python, He builds robust, scalable, and efficient server-side solutions to power seamless and high-performing applications.",
  },
  {
    id: 4,
    connect: "https://wa.me/+2349013233598",
    image: client4,
    name: "Silas",
    title: "Entrepreneur",
    title2: "SleeyRick",
    desc: "Absolutely outstanding! With years of experience in design and business, I’ve never encountered someone as innovative and skilled. Truly a pleasure to work with!",
    desc2:
      "Specializes in buying Bitcoin, He offers secure and reliable services to help clients seamlessly acquire cryptocurrency and stay ahead in the digital economy",
  },
];

function Review() {
  return (
    <>
      <section className="section-container review-container">
        <div className="container">
          <h2>Clients Review</h2>
          <p className="p-text">
            See what my satisfied clients have to say about working with me.
            Their feedback drives me to continually improve and deliver
            exceptional results.
          </p>
          <h4 className="mobile-flip">Tap card to flip <i className="ri-arrow-down-line"></i></h4>
          <div className="review">
            <SwiperComp
              spaceBetween={20}
              breakpoints={{
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
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    className="review-inner">
                    <div className="flipper">
                      <div className="front">
                        <div className="image">
                          <img src={review.image} alt="" />
                        </div>
                        <div className="text-card">
                          <h3>{review.name}</h3>
                          <h4>{review.title}</h4>
                          <p>{review.desc}</p>
                        </div>
                      </div>
                      <div className="back">
                        <div className="image">
                          <img src={review.image} alt="" />
                        </div>
                        <div className="text-card">
                          <h3>CEO</h3>
                          <h4>{review.title2}</h4>
                          <p style={{ marginBottom: "10px" }}>{review.desc2}</p>
                          <a
                            href={review.connect}
                            target="_blank"
                            style={{
                              color: "#00ccff",
                              display: "inline-block",
                              textDecoration: "underline",
                            }}>
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </SwiperComp>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
