import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaUser, FaClock, FaHome } from 'react-icons/fa';

export default function JadwalOnline() {
  const jadwalPerHari = [
    {
      hari: 'Senin',
      list: [
        {
          nama: 'Matematika - 1',
          kelas: '1 STr IT Kelas C',
          dosen: 'Ira Prasetyaningrum, S.Si, MT',
          jam: '08:00 – 09:40',
          ruang: 'B 204',
          kode: 'M-1'
        },
        {
          nama: 'Workshop Keterampilan Nonteknis',
          kelas: '1 STr IT Kelas C',
          dosen: 'Desy Intan Permatasari, S.Kom., M.Kom',
          jam: '11:20 – 14:40',
          ruang: 'C 206',
          kode: 'WKN'
        }
      ]
    },
    {
      hari: 'Selasa',
      list: [
        {
          nama: 'Praktikum Konsep Pemrograman',
          kelas: '1 STr IT Kelas D',
          dosen: 'Dr. Tita Karlita, S.Kom., M.Kom',
          jam: '08:50 – 12:10',
          ruang: 'C 303',
          kode: 'PKP'
        },
        {
          nama: 'Konsep Teknologi Informasi',
          kelas: '1 STr IT Kelas C',
          dosen: 'Dr. Idris Winarno, S.ST, M.Kom',
          jam: '13:00 – 14:40',
          ruang: 'B 304',
          kode: 'KTI'
        }
      ]
    },
    {
      hari: 'Rabu',
      list: [
        {
          nama: 'Konsep Pemrograman',
          kelas: '1 STr IT Kelas D',
          dosen: 'Dr. Tita Karlita, S.Kom., M.Kom',
          jam: '08:00 – 09:40',
          ruang: 'PS-05.10',
          kode: 'KP'
        }
      ]
    },
    {
      hari: 'Kamis',
      list: [
        {
          nama: 'Workshop Desain Web',
          kelas: '1 STr IT Kelas D',
          dosen: 'Hero Yudo Martono, ST, MT',
          jam: '08:00 – 10:30',
          ruang: 'C 303',
          kode: 'WDW'
        },
        {
          nama: 'Logika dan Algoritma',
          kelas: '1 STr IT Kelas C',
          dosen: 'Isbat Uzzin Nadhori, S.Kom., M.T',
          jam: '11:20 – 13:50',
          ruang: 'B 201',
          kode: 'LDA'
        }
      ]
    },
    {
      hari: 'Jumat',
      list: [
        {
          nama: 'Dasar Sistem Informasi',
          kelas: '1 STr IT Kelas C',
          dosen: 'Yesta Medya Mahardhika, S.Tr.Kom., M.T',
          jam: '08:00 – 09:40',
          ruang: 'B 303',
          kode: 'DSI'
        },
        {
          nama: 'Pancasila',
          kelas: '1 STr IT Kelas A',
          dosen: 'Ir. Lucky Pradigta Setiya Raharja, S.ST., M.T',
          jam: '09:40 – 11:20',
          ruang: 'SAW-01.05',
          kode: 'P'
        }
      ]
    },
    {
      hari: 'Sabtu',
      list: []
    },
    {
      hari: 'Minggu',
      list: []
    }
  ];

  return (
    <div className="pb-4">
      <div className="text-muted small mb-3">Mahasiswa &gt; <strong className="text-ethol-blue">Jadwal Online</strong></div>
      
      <div className="mb-4">
        <h5 className="fw-bold d-flex align-items-center gap-2 mb-1">
          <FaCalendarAlt /> Jadwal Online
        </h5>
        <p className="text-muted small m-0">Semester Ganjil 2026/2027 • 9 jadwal</p>
      </div>

      <Row className="g-3">
        {jadwalPerHari.map((item, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="card-ethol h-100 overflow-hidden border-0 shadow-sm">
              <div className="bg-ethol-blue text-white px-3 py-2 fw-bold">
                {item.hari}
              </div>

              <Card.Body className="p-3 d-flex flex-column gap-3">
                {item.list.length > 0 ? (
                  item.list.map((mk, i) => (
                    <div key={i} className={`${i > 0 ? 'border-top pt-3' : ''}`}>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="fw-bold m-0 text-dark" style={{ fontSize: '0.95rem' }}>{mk.nama}</h6>
                      </div>
                      
                      <div className="text-muted extra-small d-flex flex-column gap-1">
                        <div><FaUser className="me-1 text-secondary" style={{ width: '12px' }} /> {mk.kelas}</div>
                        <div><FaUser className="me-1 text-secondary" style={{ width: '12px' }} /> {mk.dosen}</div>
                        <div><FaClock className="me-1 text-secondary" style={{ width: '12px' }} /> {mk.jam}</div>
                        <div><FaHome className="me-1 text-secondary" style={{ width: '12px' }} /> {mk.ruang}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-muted py-4 small fst-italic">
                    Tidak Ada Jadwal
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}