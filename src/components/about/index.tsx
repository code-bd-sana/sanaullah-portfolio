 
import SkillArea from './SkillArea'
import ResumeArea from './ResumeArea'
import Breadcrumb from '../common/Breadcrumb' 
import HeaderOne from '../../layouts/headers/HeaderOne'
import FooterOne from '../../layouts/footers/FooterOne'
import ScrollTop from '../common/ScrollTop'
import ScrollToTop from '../common/ScrollToTop'
import CustomCursor from '../common/CustomCursor'
export default function About() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="About Me" />
            <ResumeArea />
            <SkillArea />
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
