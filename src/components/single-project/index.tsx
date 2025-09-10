 
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CustomCursor from '../common/CustomCursor'
import ScrollTop from '../common/ScrollTop'
import ScrollToTop from '../common/ScrollToTop'
import SingleProjectArea from './SingleProjectArea' 
export default function SingleProject() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Branch with Flowers" style_3={true} />
            <SingleProjectArea />
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
