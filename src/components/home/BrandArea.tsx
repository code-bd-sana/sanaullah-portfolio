 
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
                    <img src="https://i.ibb.co.com/bg2T3h6X/P-01.png" alt="Company" />
                    <img src="https://i.ibb.co.com/200cJB9J/P-02.png" alt="Company" />
                    <img src="https://i.ibb.co.com/QF5FWPGM/P-03.png" alt="Company" />
                    <img src="https://i.ibb.co.com/zhbFwnkx/P-04.png" alt="Company" />
                    <img src="https://i.ibb.co.com/h1FcKWwV/P-05.png" alt="Company" />
                    <img src="https://i.ibb.co.com/tPh2FsJp/P-06.png" alt="Company" />
                    <img src="https://i.ibb.co.com/hRdx1t0F/P-07.png" alt="Company" />
                    <img src="https://i.ibb.co.com/jkmPZdFF/P-08.png" alt="Company" />
                    <img src="https://i.ibb.co.com/ZRPmN63y/P-09.png" alt="Company" />
                    <img src="https://i.ibb.co.com/fVtvNBLL/P-10.png" alt="Company" />
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
