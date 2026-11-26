import React from 'react';
import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import { FaBars, FaBell } from 'react-icons/fa';

export default function AppNavbar({ onToggleSidebar }) {
  return (
    <Navbar bg="white" className="border-bottom sticky-top py-2 px-3" style={{ minHeight: '64px' }}>
      <Container fluid className="px-0">
        {/* Sisi Kiri: Tombol Menu (Mobile) + Logo Ethol (Mobile) + Judul Panjang (Desktop) */}
        <div className="d-flex align-items-center gap-3">
          <Button variant="link" className="text-dark p-0 border-0 d-lg-none" onClick={onToggleSidebar}>
            <FaBars size={20} />
          </Button>

          {/* Logo Ethol muncul di Navbar hanya saat layar kecil/HP (karena di laptop logo ada di Sidebar) */}
          <div className="d-flex flex-column lh-1 d-lg-none">
            <div className="fw-bold" style={{ letterSpacing: '-0.8px' }}>
              <span style={{ fontSize: '1.5rem', color: '#f39c12', display: 'inline-block', transform: 'scale(1.12)', transformOrigin: 'bottom' }}>e</span>
              <span style={{ fontSize: '1.35rem', color: '#0b4887' }}>thol</span>
            </div>
          </div>

          {/* Teks Kepanjangan di Layar Desktop sesuai gambar kedua */}
          <span className="fw-semibold text-ethol-blue d-none d-md-inline" style={{ fontSize: '1rem' }}>
            Enterprise Technology Hybrid Online Learning
          </span>
        </div>

        {/* Sisi Kanan: Notifikasi Lonceng & Profil Pengguna */}
        <div className="d-flex align-items-center gap-4">
          <Button variant="link" className="text-secondary p-0 position-relative border-0">
            <FaBell size={19} />
            <Badge 
              bg="danger" 
              pill 
              className="position-absolute top-0 start-100 translate-middle"
              style={{ fontSize: '0.6rem' }}
            >
              99+
            </Badge>
          </Button>
          
          <div className="d-flex align-items-center gap-2">
            <div 
              className="rounded-circle bg-ethol-blue text-white d-flex align-items-center justify-content-center fw-bold"
              style={{ width: '38px', height: '38px', fontSize: '14px' }}
            >
              M
            </div>
            <div className="d-none d-sm-block text-start" style={{ lineHeight: '1.2' }}>
              <div className="fw-bold" style={{ fontSize: '0.85rem', color: '#333' }}>Muhammad Ahsan Sidik</div>
              <div className="text-muted" style={{ fontSize: '0.75rem' }}>Mahasiswa</div>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}