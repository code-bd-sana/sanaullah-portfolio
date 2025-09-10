import { useState } from "react";

export default function ContactArea() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", { name, email, subject, message });
  };

  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part  wow fadeInUp delay-0-2s">
                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span className="circle-btn">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <h2>Location:</h2>
                  <p>Dhaka Bangladesh</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <span className="circle-btn">
                    <i className="ri-time-line"></i>
                  </span>
                  <h2>Working Hours:</h2>
                  <p>24/7, All Days</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <span className="circle-btn">
                    <i className="ri-mail-line"></i>
                  </span>
                  <h2>Email us:</h2>
                  <p> sanaullahshakil673@gmail.com</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h2>Socials</h2>
                  <div className="about-social">
                    <ul>
                      <li>
                        <a target="_blank" href="https://facebook.com">
                          <i className="ri-facebook-circle-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://twitter.com">
                          <i className="ri-twitter-x-line"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://linkedin.com">
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://github.com/jamilrayhan10"
                        >
                          <i className="ri-github-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form
                  id="contactForm"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Steve Milner"
                          required
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon">
                          <i className="far fa-user"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="hello@websitename.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon">
                          <i className="far fa-envelope"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Your Subject"
                          required
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-user"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write Your message"
                          required
                          data-error="Please Write your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Me Message <i className="ri-mail-line"></i>
                        </button>
                        <div id="msgSubmit" className="hidden"></div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <p className="input-success">
                        We have received your mail, We will get back to you
                        soon!
                      </p>
                      <p className="input-error">
                        Sorry, Message could not send! Please try again.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
