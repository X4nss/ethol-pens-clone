import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AccessibilityModal from './components/AccessibilityModal';

import Dashboard from './pages/Dashboard';
import Matakuliah from './pages/Matakuliah';
import JadwalOnline from './pages/JadwalOnline';
import TugasOnline from './pages/TugasOnline';
import UtsOnline from './pages/UtsOnline';
import UasOnline from './pages/UasOnline';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAksesibilitas, setShowAksesibilitas] = useState(false);
  const [activeMenu, setActiveMenu] = useState('beranda');

  const renderContent = () => {
    switch (activeMenu) {
      case 'beranda':
        return <Dashboard />;
      case 'matakuliah':
        return <Matakuliah />;
      case 'jadwal':
        return <JadwalOnline />;
      case 'tugas':
        return <TugasOnline />;
      case 'uts':
        return <UtsOnline />;
      case 'uas':
        return <UasOnline />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-light min-vh-100">
      <Sidebar 
        show={showSidebar} 
        onHide={() => setShowSidebar(false)} 
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onOpenAksesibilitas={() => {
          setShowSidebar(false);
          setShowAksesibilitas(true);
        }}
      />

      <div className="main-wrapper">
        <AppNavbar onToggleSidebar={() => setShowSidebar(true)} />

        <Container fluid className="p-3 p-lg-4">
          {renderContent()}
        </Container>
      </div>

      <AccessibilityModal 
        show={showAksesibilitas} 
        onHide={() => setShowAksesibilitas(false)} 
      />
    </div>
  );
}