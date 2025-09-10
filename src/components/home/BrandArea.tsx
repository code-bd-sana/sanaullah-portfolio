 
import  { useEffect } from 'react'

export default function BrandArea() {

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Company I Worked With</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    <img src="assets/images/client-logos/partner1.png" alt="Company" />
                    <img src="assets/images/client-logos/partner2.png" alt="Company" />
                    <img src="assets/images/client-logos/partner3.png" alt="Company" />
                    <img src="assets/images/client-logos/partner4.png" alt="Company" />
                    <img src="assets/images/client-logos/partner5.png" alt="Company" />
                    <img src="assets/images/client-logos/partner1.png" alt="Company" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
