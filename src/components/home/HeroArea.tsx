 
export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Sanaullah Shakil</h2>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">

              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img style={{width:"60px", height:"60px", objectFit:"cover"}} className="img-fluid rounded-circle" src="https://i.ibb.co.com/NnL0GNjF/rsz-11matheus-ferrero-w7b3edub-2.jpg" alt="client" />
                    </li>
                    <li>
                      <img style={{width:"60px", height:"60px", objectFit:"cover"}} className="img-fluid rounded-circle" src="https://i.ibb.co.com/XffNPFKx/rsz-1ian-dooley-d1upkifd04a-unsp.jpg" alt="client" />
                    </li>
                    <li>
                      <img style={{width:"60px", height:"60px", objectFit:"cover"}} className="img-fluid rounded-circle" src="https://i.ibb.co.com/wFpMCjDj/rsz-3albert-dera-ilip77sbmoe-uns.jpg" alt="client" />
                    </li>
                  </ul>
                  <div className="reviews">100+ reviews <span>(4.96 of 5)</span>
                    <p>Five-star reviews from my esteemed clients.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="https://i.ibb.co.com/LzHFvV2D/albert-dera-ILip77-Sbm-OE-unsplash.jpg" alt="" />
              </div>

            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Hi, I’m Sanaullah Shakil, a passionate MERN Stack Web Application Developer dedicated to building seamless, high-quality websites with a strong focus on achieving complete client satisfaction.</p>
                <a className="theme-btn" href="">Get In touch</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
