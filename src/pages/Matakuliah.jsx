import React from 'react';
import { Card, Form, Badge, Row, Col } from 'react-bootstrap';

export default function Matakuliah() {
  const listMk = [
    { nama: 'Matematika - 1', dosen: 'Ira Prasetyaningrum, S.Si, MT', kode: 'M-1', jadwal: 'Senin, 08:00 - 09:40', ruang: 'B 204' },
    { nama: 'Workshop Keterampilan Nonteknis', dosen: 'Desy Intan Permatasari, S.Kom., M.Kom', kode: 'WKN', jadwal: 'Senin, 11:20 - 14:40', ruang: 'C 206' },
    { nama: 'Praktikum Konsep Pemrograman', dosen: 'Dr. Tita Karlita, S.Kom., M.Kom', kode: 'PKP', jadwal: 'Selasa, 08:50 - 12:10', ruang: 'C 303' },
    { nama: 'Konsep Teknologi Informasi', dosen: 'Dr. Idris Winarno, S.ST, M.Kom', kode: 'KTI', jadwal: 'Selasa, 13:00 - 14:40', ruang: 'B 304' },
    { nama: 'Konsep Pemrograman', dosen: 'Dr. Tita Karlita, S.Kom., M.Kom', kode: 'KP', jadwal: 'Rabu, 08:00 - 09:40', ruang: 'PS-05.10' },
    { nama: 'Workshop Desain Web', dosen: 'Hero Yudo Martono, ST, MT', kode: 'WDW', jadwal: 'Kamis, 08:00 - 10:30', ruang: 'C 303' },
    { nama: 'Logika dan Algoritma', dosen: 'Isbat Uzzin Nadhori, S.Kom., M.T', kode: 'LDA', jadwal: 'Kamis, 11:20 - 13:50', ruang: 'B 201' },
    { nama: 'Dasar Sistem Informasi', dosen: 'Yesta Medya Mahardhika, S.Tr.Kom., M.T', kode: 'DSI', jadwal: "Jum'at, 08:00 - 09:40", ruang: 'B 303' },
    { nama: 'Pancasila', dosen: 'Ir. Lucky Pradigta Setiya Raharja, S.ST., M.T', kode: 'P', jadwal: "Jum'at, 09:40 - 11:20", ruang: 'SAW-01.05' }
  ];

  return (
    <div className="pb-4">
      <div className="text-muted small mb-3">Mahasiswa &gt; <strong className="text-ethol-blue">Matakuliah</strong></div>
      
      {/* Filter Form Card Horizontal */}
      <Card className="card-ethol mb-4">
        <Card.Body className="p-3 p-md-4">
          <Row className="g-3 align-items-end">
            <Col md={3}>
              <Form.Label className="small text-muted mb-1">Tahun Ajaran</Form.Label>
              <Form.Select><option>2026/2027</option></Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label className="small text-muted mb-1">Semester</Form.Label>
              <Form.Select><option>Ganjil</option></Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label className="small text-muted mb-1">Pencarian</Form.Label>
              <Form.Control placeholder="Cari matakuliah..." />
            </Col>
          </Row>
          <div className="text-muted small text-end mt-3">9 matakuliah ditemukan</div>
        </Card.Body>
      </Card>

      {/* Grid 3 Kolom untuk 9 Matakuliah */}
      <Row className="g-3">
        {listMk.map((mk, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="card-ethol bg-ethol-blue text-white h-100 border-0">
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <div>
                      <h6 className="fw-bold mb-1">{mk.nama}</h6>
                      <div className="small text-white-50">{mk.dosen}</div>
                    </div>
                    <Badge bg="primary" className="p-2">{mk.kode}</Badge>
                  </div>
                  <div className="mt-3 small text-white-50">
                    <div>{mk.jadwal}</div>
                    <div>{mk.ruang}</div>
                  </div>
                </div>
                <div>
                  <hr className="my-3 border-white opacity-25" />
                  <div className="text-end">
                    <span className="small text-white fw-bold cursor-pointer">Akses Kuliah &gt;</span>
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