import React from 'react';
import { Card, Form, Badge, Row, Col } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

export default function UtsOnline() {
  const utsList = [
    { nama: 'Matematika - 1', dosen: 'Ira Prasetyaningrum, S.Si, MT', kode: 'M-1', mulai: 'Senin, 12 Oktober 2026 - 08:00', selesai: 'Senin, 12 Oktober 2026 - 09:40' },
    { nama: 'Workshop Keterampilan Nonteknis', dosen: 'Desy Intan Permatasari, S.Kom., M.Kom', kode: 'WKN', mulai: 'Senin, 12 Oktober 2026 - 11:20', selesai: 'Senin, 12 Oktober 2026 - 14:40' },
    { nama: 'Praktikum Konsep Pemrograman', dosen: 'Dr. Tita Karlita, S.Kom., M.Kom', kode: 'PKP', mulai: 'Selasa, 13 Oktober 2026 - 08:50', selesai: 'Selasa, 13 Oktober 2026 - 12:10' }
  ];

  return (
    <div className="pb-4">
      <div className="text-muted small mb-3">Mahasiswa &gt; Ujian Online &gt; <strong className="text-ethol-blue">UTS</strong></div>
      
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <div>
          <h5 className="fw-bold d-flex align-items-center gap-2 mb-1">
            <FaGraduationCap /> UTS Online
          </h5>
          <p className="text-muted small m-0">2026/2027 • Ganjil • 9 matakuliah</p>
        </div>
        <div style={{ minWidth: '280px' }}>
          <Form.Control placeholder="Cari matakuliah..." />
        </div>
      </div>

      <Row className="g-3">
        {utsList.map((item, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="card-ethol h-100">
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between gap-2">
                    <div>
                      <h6 className="fw-bold mb-1">{item.nama}</h6>
                      <div className="text-muted small mb-3">{item.dosen}</div>
                    </div>
                    <Badge bg="primary" className="align-self-start p-2">{item.kode}</Badge>
                  </div>
                  <div className="small text-muted">
                    <div>Mulai: {item.mulai}</div>
                    <div>Selesai: {item.selesai}</div>
                  </div>
                </div>
                <div>
                  <hr className="my-3" />
                  <div className="text-end">
                    <span className="text-ethol-blue small fw-bold cursor-pointer">Lihat Ujian &gt;</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}