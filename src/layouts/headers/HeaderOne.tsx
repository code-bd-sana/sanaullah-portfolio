import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import Sidebar from "../../components/common/Sidebar";

 

export default function HeaderOne() {

  const { sticky } = UseSticky()
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`main-header ${sticky ? 'fixed-header' : ''}`}>
        <div className="header-upper">
          <div className="container">
            <div className="header-inner">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-6 col-6 col-sm-3">
                  <div className="logo-area">
                    <div className="logo">
                      <Link to="/"><img src="assets/images/logo.png" alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-6 col-6 col-sm-9">
                  <div className="main-menu d-none d-lg-block">
                    <nav id="mobile-menu">
                      <NavMenu /> 
                    </nav>
                  </div>
                  <div className="side-menu-icon d-lg-none text-end">
                    <a style={{ cursor: "pointer" }} onClick={() => setOpen(!open)} className="info-toggle-btn f-right sidebar-toggle-btn"><i className="fal fa-bars"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  )
}
