import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import "./Contact.scss";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Button from "../components/Button/Button";
import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";

const forms = [
  { id: 1, type: "text", name: "Name", placeholder: "Enter Name" },
  { id: 2, type: "email", name: "Email", placeholder: "Enter Email" },
  { id: 3, type: "tel", name: "Phone Number", placeholder: "Phone Number" },
];
const validate = [
  { id: 1, prefix: "Text", type: "text" },
  { id: 2, prefix: "Email", type: "email" },
  { id: 3, prefix: "Tel", type: "tel" },
];


function Contact() {
  const [state, handleSubmit] = useForm("xqakvyaw");
  if (state.succeeded) {
    return (
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h3 style={{ textAlign: "center", margin: "30px 0" }}>
          Thanks for your message<br/><br/> Your Message is well Received
        </h3>
        <a href="/contact" style={{ background: "#00ccff", borderRadius: "5px", display: "inlineBlock", padding: "6px 15px", fontSize: "1rem", color: "#fff" }}>
          Back
        </a>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Umunu&apos;s Portfolio || Contact Page</title>
      </Helmet>
      <Header />

      <section className="section-container" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="contact-form">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              viewport={{ once: true }}>
              <span>Get in Touch</span>
              <h3 style={{ margin: "20px 0" }}>Reach out today!</h3>
              <p style={{ marginBottom: "30px" }}>
                Feel free to reach out to us via phone, email, or by filling out
                the contact form below. We look forward to hearing from you!
              </p>
              {forms.map((formtext) => (
                <input
                  key={formtext.id}
                  type={formtext.type}
                  name={formtext.name}
                  placeholder={formtext.placeholder}
                  required
                />
              ))}
              {validate.map((vali) => (
                <ValidationError
                  key={vali.id}
                  prefix={vali.prefix}
                  field={vali.type}
                  errors={state.errors}
                />
              ))}

              <textarea
                name="Message"
                placeholder="Drop A Message"
                rows="5" required></textarea> 
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <Button className="btn" disabled={state.submitting}>
                Submit
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              viewport={{ once: true }}
              className="txt">
              <span>More Details</span>
              <h3 style={{ margin: "20px 0" }}>uTech</h3>

              <p style={{ marginBottom: "30px" }}>
                At uTech, we’re committed to delivering exceptional digital
                solutions, whether it’s through stunning web designs, powerful
                web development tutorials, or creative graphics. We believe in
                crafting experiences that not only meet the needs of our clients
                but exceed their expectations. With years of experience, a
                passion for innovation, and a dedication to quality, uTech
                continues to push the boundaries of creativity and technology.
                Have a project in mind? Let’s collaborate and bring your ideas
                to life. We’re just a message away!
              </p>

              <p style={{ marginBottom: "30px" }}>
                <span>Phone:</span> +234 703 601 9770
              </p>

              <p>
                <span>Email:</span>{" "}
                <a
                  href="mailto:odafeumunu@gmail.com"
                  style={{ color: "#00ccff" }}>
                  odafeumunu@gmail.com
                </a>
              </p>
            </motion.div>
          </div>

          <section style={{ marginTop: "100px", overflow: "hidden" }}>
            <motion.iframe
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107494.01360265318!2d3.121995924196404!3d6.657711391324838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9903ef9912d7%3A0x4f1a317e5c3e4b00!2sOta%2C%20Ogun%20State!5e1!3m2!1sen!2sng!4v1733150679685!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"></motion.iframe>
          </section>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Contact;
