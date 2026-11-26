import React from 'react';
import { Offcanvas, Nav, Accordion } from 'react-bootstrap';
import { 
  FaHome, FaBook, FaCalendarAlt, FaEdit, 
  FaGraduationCap, FaUniversalAccess, FaSignOutAlt, FaUniversity 
} from 'react-icons/fa';

export default function Sidebar({ show, onHide, activeMenu, setActiveMenu, onOpenAksesibilitas }) {
  const handleNav = (menuKey) => {
    setActiveMenu(menuKey);
    if (onHide) onHide();
  };

  // Isi menu yang dipakai bersama untuk tampilan Desktop maupun Mobile
  const MenuContent = () => (
    <div className="d-flex flex-column h-100">
      {/* Header Logo di pojok kiri atas Sidebar persis gambar kedua */}
      <div className="d-flex align-items-center gap-3 px-3 py-3 border-bottom" style={{ minHeight: '64px' }}>
        <div 
          className="bg-ethol-blue text-white rounded-3 d-flex flex-column align-items-center justify-content-center"
          style={{ width: '38px', height: '38px', flexShrink: 0 }}
        >
          <FaUniversity size={16} />
          <span style={{ fontSize: '7px', fontWeight: 'bold', letterSpacing: '0.5px' }}>PENS</span>
        </div>
        <div className="d-flex flex-column lh-1">
          <div className="fw-bold" style={{ letterSpacing: '-0.8px' }}>
            <span style={{ fontSize: '1.6rem', color: '#f39c12', display: 'inline-block', transform: 'scale(1.12)', transformOrigin: 'bottom' }}>e</span>
            <span style={{ fontSize: '1.45rem', color: '#0b4887' }}>thol</span>
          </div>
          <span className="text-muted" style={{ fontSize: '0.42rem', fontWeight: '600' }}>
            Enterprise Technology Hybrid Online Learning
          </span>
        </div>
      </div>

      <div className="py-3 flex-grow-1 overflow-auto">
        <div className="px-3 text-muted extra-small fw-bold mb-2">UTAMA</div>
        <Nav className="flex-column mb-3">
          <Nav.Link 
            className={`px-3 py-2 d-flex align-items-center gap-3 mx-2 rounded-3 ${activeMenu === 'beranda' ? 'bg-ethol-blue text-white fw-semibold' : 'text-dark'}`}
            onClick={() => handleNav('beranda')}
          >
            <FaHome /> Beranda
          </Nav.Link>
        </Nav>

        <div className="px-3 text-muted extra-small fw-bold mb-2">KULIAH</div>
        <Nav className="flex-column mb-3">
          <Nav.Link 
            className={`px-3 py-2 d-flex align-items-center gap-3 mx-2 rounded-3 ${activeMenu === 'matakuliah' ? 'bg-ethol-blue text-white fw-semibold' : 'text-dark'}`}
            onClick={() => handleNav('matakuliah')}
          >
            <FaBook /> Matakuliah
          </Nav.Link>
          <Nav.Link
  className={`px-3 py-2 d-flex align-items-center gap-3 mx-2 rounded-3 ${activeMenu === 'jadwal' ? 'bg-ethol-blue text-white fw-semibold' : 'text-dark'}`}
  onClick={() => handleNav('jadwal')}
>
  <FaCalendarAlt /> Jadwal Online
</Nav.Link>
          <Nav.Link 
            className={`px-3 py-2 d-flex align-items-center gap-3 mx-2 rounded-3 ${activeMenu === 'tugas' ? 'bg-ethol-blue text-white fw-semibold' : 'text-dark'}`}
            onClick={() => handleNav('tugas')}
          >
            <FaEdit /> Tugas Online
          </Nav.Link>

          <Accordion flush className="sidebar-accordion mx-2">
            <Accordion.Item eventKey="0" className="border-0 bg-transparent">
              <Accordion.Header>
                <div className="d-flex align-items-center gap-3 text-dark">
                  <FaGraduationCap /> Ujian Online
                </div>
              </Accordion.Header>
              <Accordion.Body className="py-1 ps-4">
                <Nav.Link 
                  className={`py-1 rounded-2 ${activeMenu === 'uts' ? 'fw-bold text-ethol-blue bg-light' : 'text-secondary'}`}
                  onClick={() => handleNav('uts')}
                >
                  UTS
                </Nav.Link>
                <Nav.Link 
                  className={`py-1 rounded-2 ${activeMenu === 'uas' ? 'fw-bold text-ethol-blue bg-light' : 'text-secondary'}`}
                  onClick={() => handleNav('uas')}
                >
                  UAS
                </Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Nav>

        <div className="px-3 text-muted extra-small fw-bold mb-2">AKSESIBILITAS</div>
        <Nav className="flex-column mb-3">
          <Nav.Link 
            className="px-3 py-2 d-flex align-items-center justify-content-between mx-2 rounded-3 bg-light text-ethol-blue fw-semibold" 
            onClick={onOpenAksesibilitas}
          >
            <span className="d-flex align-items-center gap-3">
              <FaUniversalAccess /> Aksesibilitas
            </span>
            <span className="rounded-circle bg-ethol-blue" style={{ width: '8px', height: '8px' }}></span>
          </Nav.Link>
        </Nav>

        <div className="px-3 text-muted extra-small fw-bold mb-2">LAINNYA</div>
        <Nav className="flex-column">
          <Nav.Link className="px-3 py-2 d-flex align-items-center gap-3 mx-2 text-dark">
            <FaSignOutAlt /> Keluar
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Sidebar Permanen untuk Desktop (Layar >= 992px) */}
      <aside className="sidebar-desktop d-none d-lg-block">
        <MenuContent />
      </aside>

      {/* 2. Sidebar Geser (Offcanvas) untuk HP/Tablet (Layar < 992px) */}
      <Offcanvas show={show} onHide={onHide} className="d-lg-none" style={{ width: '270px' }}>
        <Offcanvas.Body className="p-0">
          <MenuContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}