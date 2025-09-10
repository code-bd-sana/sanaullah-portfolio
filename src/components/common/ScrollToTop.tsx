
import  { useState, useEffect, useRef } from "react";


const ScrollToTop = () => { 

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);


  // Progress animation
  const [isActive, setIsActive] = useState(false);
  const progressRef = useRef<SVGPathElement | null>(null);
  const offset = 150; 

  useEffect(() => {
    const progressPath = progressRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    // Initial path setup
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    // Update progress based on scroll position
    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;

      // Toggle the active class based on scroll offset
      setIsActive(scroll > offset);
    };

    // Scroll event listener
    window.addEventListener('scroll', updateProgress);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);







  return (
    <>
      <div className={`progress-wrap cursor-pointer  ${isActive ? 'active-progress' : ''}`} onClick={scrollTop}>
        <i className="ri-arrow-up-s-line"></i>
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path ref={progressRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

    </>
  );
};

export default ScrollToTop;
