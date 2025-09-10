 
import  { useState } from 'react'
import PostboxArea from './PostboxArea'
import Breadcrumb from '../common/Breadcrumb' 
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterOne from '../../layouts/footers/FooterOne';
import VideoPopup from '../../modals/VideoPopup';
import ScrollTop from '../common/ScrollTop';
import ScrollToTop from '../common/ScrollToTop';
import CustomCursor from '../common/CustomCursor';

export default function Blog() {

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>

      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Blogs" style_4={true} />
            <PostboxArea setIsVideoOpen={setIsVideoOpen} />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}

      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  )
}
