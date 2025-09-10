 
// import Lightbox from "react-18-image-lightbox"; 
import Lightbox from "react-18-image-lightbox";

// import dynamic from 'next/dynamic';
// const Lightbox = dynamic(() => import('react-18-image-lightbox'), { ssr: false });


type DataType = {
  images: any;
  setIsOpen: any;
  photoIndex: any;
  setPhotoIndex: any;

}

const ImagePopup = ({ images, setIsOpen, photoIndex, setPhotoIndex }:  DataType ) => {
  return (
    <>
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    </>
  );
};

export default ImagePopup;



