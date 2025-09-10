 
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CustomCursor from '../common/CustomCursor'
import ScrollTop from '../common/ScrollTop'
import ScrollToTop from '../common/ScrollToTop'
import PortfolioArea from '../home/PortfolioArea' 

export default function Projects() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Projects" style_2={true} />
            <PortfolioArea />
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
