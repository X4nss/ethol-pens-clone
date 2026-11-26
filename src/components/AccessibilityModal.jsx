import React from 'react';
import { Modal, Row, Col, Card, Button } from 'react-bootstrap';
import { FaAdjust, FaMoon, FaFont, FaGlasses, FaPause, FaMousePointer } from 'react-icons/fa';

export default function AccessibilityModal({ show, onHide }) {
  const options = [
    { icon: <FaAdjust />, title: 'Balikkan Warna' },
    { icon: <FaMoon />, title: 'Kontras Gelap' },
    { icon: <FaFont />, title: 'Teks Lebih Besar' },
    { icon: <FaGlasses />, title: 'Ramah Disleksia' },
    { icon: <FaPause />, title: 'Jeda Animasi' },
    { icon: <FaMousePointer />, title: 'Kursor Besar' },
  ];

  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Header closeButton className="bg-ethol-blue text-white">
        <Modal.Title className="fs-6 fw-bold">AKSESIBILITAS</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-3">
        <Row className="g-2">
          {options.map((opt, idx) => (
            <Col xs={6} key={idx}>
              <Card className="text-center p-3 border h-100 hover-shadow cursor-pointer">
                <div className="fs-3 text-secondary mb-1">{opt.icon}</div>
                <div className="small fw-semibold">{opt.title}</div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-3 text-muted small fw-bold">KEJENUHAN</div>
        <Row className="g-2 mt-1">
          <Col xs={4}>
            <Button variant="outline-secondary" className="w-100 btn-sm py-2">Saturasi Rendah</Button>
          </Col>
          <Col xs={4}>
            <Button variant="outline-secondary" className="w-100 btn-sm py-2">Saturasi Tinggi</Button>
          </Col>
          <Col xs={4}>
            <Button variant="outline-secondary" className="w-100 btn-sm py-2">Desaturasi</Button>
          </Col>
        </Row>

        <Button variant="outline-secondary" className="w-100 mt-3 btn-sm" onClick={onHide}>
          Atur Ulang Semua
        </Button>
      </Modal.Body>
    </Modal>
  );
}