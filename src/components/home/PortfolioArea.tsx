import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image: "https://i.ibb.co.com/zTvLWfPL/Screenshot-2025-09-10-121722.png",
    title: "CurHut",
    category: "Project",
  },
  {
    id: 2,
    col: "6",
    image: "https://i.ibb.co.com/C3cpNFwz/hq720.jpg",
    title: "To-Do App",
    category: "Project",
  },
  {
    id: 3,
    col: "4",
    image: "https://i.ibb.co.com/7tGxGC4n/Add-a-heading-39.webp",
    title: "Web Development",
    category: "Project",
  },
  {
    id: 4,
    col: "4",
    image: "https://i.ibb.co.com/d0bg4m7J/Screenshot-2025-09-10-122152.png",
    title: "Ollyo",
    category: "Project",
  },
  {
    id: 5,
    col: "4",
    image: "https://i.ibb.co.com/S4WryG8N/Screenshot-2025-09-10-122440.png",
    title: "Musemind",
    category: "Project",
  },
];

export default function PortfolioArea() {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 5).map((item) => item.image);

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
              >
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="portfolio-box">
                    <img
                      src={item.image}
                      alt=""
                      style={{ height: "572.08px", objectFit: "cover" }}
                      data-rjs="2"
                    />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
}
