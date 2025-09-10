 
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CustomCursor from '../common/CustomCursor'
import ScrollTop from '../common/ScrollTop'
import ScrollToTop from '../common/ScrollToTop'
import ContactArea from '../home/ContactArea' 

export default function Contact() {
  return (
    <>

      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Say Hello" style_3={true} />
            <ContactArea />
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
