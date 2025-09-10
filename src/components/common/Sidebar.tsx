import MobileMenu from "../../layouts/headers/MobileMenu";

 

export default function Sidebar({ open, setOpen }: any) {
  return (
    <>
      <div className={`sidebar__area ${open ? 'sidebar-opened' : ''}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" id="sidebar__close-btn" onClick={() => setOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content mt-50 mb-20">
            <div className="mobile-menu fix mean-container">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${open ? 'opened' : ''}`} onClick={() => setOpen(false)}></div>

    </>
  )
}
