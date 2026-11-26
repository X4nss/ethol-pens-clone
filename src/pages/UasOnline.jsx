import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

export default function UasOnline() {
  return (
    <div className="pb-4">
      <div className="text-muted small mb-3">Mahasiswa &gt; Ujian Online &gt; <strong className="text-ethol-blue">UAS</strong></div>
      
      <h5 className="fw-bold d-flex align-items-center gap-2 mb-1">
        <FaGraduationCap /> UAS Online
      </h5>
      <p className="text-muted small mb-4">2026/2027 • Ganjil • 0 matakuliah</p>

      <Card className="card-ethol text-center py-5">
        <Card.Body className="py-5">
          <p className="text-muted m-0">Jadwal UAS untuk semester ini belum tersedia.</p>
        </Card.Body>
      </Card>
    </div>
  );
}