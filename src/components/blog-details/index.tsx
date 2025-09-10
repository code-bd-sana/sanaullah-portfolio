 
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CustomCursor from '../common/CustomCursor'
import ScrollTop from '../common/ScrollTop'
import ScrollToTop from '../common/ScrollToTop'
import BlogDetailsArea from './BlogDetailsArea' 

export default function BlogDetails() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Create a Landing Page That Performs Great" />
            <BlogDetailsArea />
          </main>
          <FooterOne />
        </div>
      </div>

      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  )
}
