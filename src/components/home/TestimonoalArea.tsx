export default function TestimonoalArea() {
  return (
    <>
      <section className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Testinomials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-2s">
                <div className="author">
                  <img
                    src="assets/images/testimonials/author1.jpg"
                    alt="Author"
                  />
                </div>
                <div className="text">
                  Incredible work! The seller is very knowledgeable and easy to
                  work with. Always available for feedback and quick revisions.
                  Really appreciate your effort and excellent customer service.
                </div>
                <div className="testi-des">
                  <h5>adamcris0</h5>
                  <span>
                    Rating:
                    <span className="ms-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-4s">
                <div className="author">
                  <img
                    src="assets/images/testimonials/author2.jpg"
                    alt="Author"
                  />
                </div>
                <div className="text">
                  One of the best freelancers I've worked with. The site looks
                  great, functions smoothly, and was delivered quickly. Very
                  satisfied. Looking forward to future collaborations!
                </div>
                <div className="testi-des">
                  <h5>icehath</h5>
                  <span>
                    Rating:
                    <span className="ms-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-6s">
                <div className="author">
                  <img
                    src="assets/images/testimonials/author3.jpg"
                    alt="Author"
                  />
                </div>
                <div className="text">
                  I had a wonderful experience. The work was creative, polished,
                  and delivered earlier than expected. I will look forward to
                  future collaboration.
                </div>
                <div className="testi-des">
                  <h5>josephrice71</h5>
                  <span>
                    Rating:
                    <span className="ms-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-8s">
                <div className="author">
                  <img
                    src="assets/images/testimonials/author4.jpg"
                    alt="Author"
                  />
                </div>
                <div className="text">
                  The seller was professional, clear, and highly responsive
                  throughout. Delivery arrived right on time, and the final
                  result exceeded expectations.
                </div>
                <div className="testi-des">
                  <h5>wybeeaasm</h5>
                  <span>
                    Rating:
                    <span className="ms-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-9s">
                <div className="author">
                  <img
                    src="assets/images/testimonials/author5.jpg"
                    alt="Author"
                  />
                </div>
                <div className="text">
                  It was a genuine pleasure working with you! Your clarity,
                  professionalism, and cooperation made the entire project flow
                  smoothly from start to finish.
                </div>
                <div className="testi-des">
                  <h5>damianjackson95</h5>
                  <span>
                    Rating:
                    <span className="ms-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
