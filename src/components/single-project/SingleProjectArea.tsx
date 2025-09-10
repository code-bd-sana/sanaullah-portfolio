 
import  { useState } from 'react'
import ImagePopup from '../../modals/ImagePopup';

import img_1 from "../../../public/assets/images/projects/work1.jpg";
import img_2 from "../../../public/assets/images/projects/work2.jpg";
import img_3 from "../../../public/assets/images/projects/work3.jpg";
import img_4 from "../../../public/assets/images/projects/work4.jpg"; 

const portfolio_images = [
  {
    id: 1,
    image: img_1,
  },
  {
    id: 2,
    image: img_2,
  },
  {
    id: 3,
    image: img_3,
  },
  {
    id: 4,
    image: img_4,
  },
]

export default function SingleProjectArea() {

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
  const image = portfolio_images.slice(0, 5).map((item) => item.image);


  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src="assets/images/projects/work2.jpg" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">

              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info">
                  <p>Year</p>
                  <h3>2024</h3>
                </div>
                <div className="single-info">
                  <p>Client</p>
                  <h3>Bento Studio</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>Web Design</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>Creative</h3>
                </div>
              </div>

            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>
                  Description
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
              </div>
            </div>

          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div className="col-lg-6">
                <a style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <img src={item.image} style={{ height: "auto" }} alt="gallery" />
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
  )
}
