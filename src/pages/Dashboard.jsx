import React from 'react';
import { Card, Row, Col, Badge, Form, Button } from 'react-bootstrap';
import { 
  FaBullhorn, FaBookOpen, FaChartBar, FaFolderOpen, 
  FaClock, FaHome, FaChevronRight, FaPlay, FaClipboardList, 
  FaBriefcase, FaBook, FaQuestionCircle, FaLaptop 
} from 'react-icons/fa';

export default function Dashboard() {
  const presensiData = [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0];

  const matakuliahPreview = [
    { nama: 'Logika dan Algoritma', dosen: 'Isbat Uzzin Nadhori, S.Kom., M.T', kode: 'LDA', jadwal: 'Kamis, 11:20 - 13:50', ruang: 'B 201' },
    { nama: 'Dasar Sistem Informasi', dosen: 'Yesta Medya Mahardhika, S.Tr.Kom., M.T', kode: 'DSI', jadwal: "Jum'at, 08:00 - 09:40", ruang: 'B 303' },
    { nama: 'Pancasila', dosen: 'Ir. Lucky Pradigta Setiya Raharja, S.ST., M.T', kode: 'P', jadwal: "Jum'at, 09:40 - 11:20", ruang: 'SAW-01.05' }
  ];

  const layananList = [
    { icon: <FaClipboardList size={22} />, title: 'Materi Perkuliahan' },
    { icon: <FaBriefcase size={22} />, title: 'Administrasi' },
    { icon: <FaBook size={22} />, title: 'Perpustakaan' },
    { icon: <FaQuestionCircle size={22} />, title: 'Kuis' },
    { icon: <FaLaptop size={22} />, title: 'Ujian Online' },
  ];

  return (
    <div className="pb-4">
      {/* Banner Selamat Datang Full Width */}
      <Card className="card-ethol bg-ethol-blue text-white mb-3 border-0">
        <Card.Body className="p-4">
          <div style={{ width: '35px', height: '4px', backgroundColor: '#ffc107', marginBottom: '12px' }}></div>
          <p className="mb-1 text-white-50 small">Selamat datang,</p>
          <h3 className="fw-bold mb-1">Muhammad Ahsan Sidik!</h3>
          <p className="small mb-3 text-white-50">Mahasiswa</p>
          <div className="d-flex align-items-center gap-2 small">
            <FaClock /> Kamis, 19 November 2026
          </div>
        </Card.Body>
      </Card>

      {/* Pengumuman Full Width */}
      <Card className="card-ethol mb-4">
        <Card.Body className="d-flex flex-wrap align-items-center justify-content-between p-3 gap-2">
          <div className="d-flex align-items-center gap-3">
            <div className="p-2 bg-light rounded-3 text-ethol-blue">
              <FaBullhorn size={18} />
            </div>
            <span className="fw-bold">Pengumuman</span>
            <Badge bg="primary" className="badge-counter">1 aktif</Badge>
            <span className="text-muted small d-none d-md-inline ms-2">
              Selamat Menjalankan Perkuliahan Semester Ganjil 2026/2027...
            </span>
          </div>
          <Button variant="link" className="text-ethol-blue fw-semibold text-decoration-none p-0 small">
            Lihat semua <FaChevronRight size={10} />
          </Button>
        </Card.Body>
      </Card>

      {/* Ringkasan Semester + Semester Aktif (Berdampingan di layar lebar) */}
      <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
        <FaChartBar /> Ringkasan Semester
      </h6>

      <Row className="g-3 mb-4">
        {/* Kotak Putih 3 Kolom di Kiri */}
        <Col lg={8}>
          <Card className="card-ethol h-100">
            <Card.Body className="p-4 d-flex align-items-center">
              <Row className="w-100 g-3">
                <Col sm={4} className="d-flex align-items-start gap-3 border-end-sm">
                  <div className="p-3 bg-light text-primary rounded-3">
                    <FaBookOpen size={22} />
                  </div>
                  <div>
                    <h3 className="fw-bold m-0">9</h3>
                    <div className="fw-semibold text-dark small">Matakuliah</div>
                    <div className="text-muted extra-small">semester ini</div>
                  </div>
                </Col>

                <Col sm={4} className="d-flex align-items-start gap-3 border-end-sm">
                  <div className="p-3 bg-light text-success rounded-3">
                    <FaChartBar size={22} />
                  </div>
                  <div>
                    <h3 className="fw-bold m-0">98%</h3>
                    <div className="fw-semibold text-dark small">Rata-rata Kehadiran</div>
                    <div className="text-muted extra-small">semua matakuliah</div>
                    <div className="text-muted fst-italic extra-small mt-1">*Berdasarkan data presensi ETHOL</div>
                  </div>
                </Col>

                <Col sm={4} className="d-flex align-items-start gap-3">
                  <div className="p-3 bg-light text-warning rounded-3">
                    <FaFolderOpen size={22} />
                  </div>
                  <div>
                    <h3 className="fw-bold m-0">0</h3>
                    <div className="fw-semibold text-dark small">Tugas Belum Dikumpulkan</div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Banner Biru Semester Aktif di Kanan */}
        <Col lg={4}>
          <Card className="card-ethol bg-ethol-blue text-white h-100">
            <Card.Body className="p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="extra-small text-white-50 fw-bold mb-1">SEMESTER AKTIF</div>
                <h4 className="fw-bold m-0">Ganjil 2026/2027</h4>
              </div>
              <div>
                <hr className="my-3 border-white opacity-25" />
                <div className="small text-white-50">108 sesi presensi ETHOL dibuka semester ini</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section Matakuliah 3 Kolom Ke Samping */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold m-0 d-flex align-items-center gap-2"><FaBookOpen /> Matakuliah</h6>
        <div className="d-flex align-items-center gap-3">
          <span className="text-muted fst-italic extra-small d-none d-md-inline">Item dapat digeser ke kanan atau ke kiri</span>
          <span className="text-ethol-blue fw-semibold small cursor-pointer">Lihat semua &rarr;</span>
        </div>
      </div>

      <Row className="g-3 mb-4">
        {matakuliahPreview.map((mk, idx) => (
          <Col md={4} key={idx}>
            <Card className="card-ethol h-100 p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="fw-bold mb-1">{mk.nama}</h6>
                  <div className="text-muted extra-small">{mk.dosen}</div>
                </div>
                <Badge bg="primary" className="p-2 align-self-start">{mk.kode}</Badge>
              </div>
              <div className="mt-3 text-muted extra-small">
                <div className="mb-1"><FaClock className="me-1" /> {mk.jadwal}</div>
                <div><FaHome className="me-1" /> {mk.ruang}</div>
              </div>
              <hr className="my-2 mt-auto" />
              <div className="text-end text-ethol-blue fw-bold extra-small cursor-pointer">Akses Kuliah &gt;</div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Jadwal Hari Ini + Kehadiran + Tugas (Grid 2 Kolom Besar) */}
      <Row className="g-3 mb-4">
        <Col lg={6}>
          {/* Jadwal Hari Ini */}
          <Card className="card-ethol bg-ethol-blue text-white mb-3">
            <Card.Body className="p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-bold d-flex align-items-center gap-2">
                  <FaClock /> Jadwal Hari Ini
                </div>
                <div className="small text-white-50">Kamis, 19 November 2026</div>
              </div>

              <Card className="bg-white text-dark border-0 rounded-3 p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3 align-items-center">
                    <Badge bg="secondary" className="p-2 fs-6">WDW</Badge>
                    <div>
                      <h6 className="fw-bold m-0">Workshop Desain Web</h6>
                      <div className="text-muted small">Hero Yudo Martono, ST, MT</div>
                      <div className="text-muted extra-small"><FaHome /> C 303 &bull; <FaClock /> 08:00 - 10:30</div>
                    </div>
                  </div>
                  <Button variant="light" className="text-primary fw-bold border border-primary px-3 btn-sm d-flex align-items-center gap-1">
                    <FaPlay size={10} /> Masuk
                  </Button>
                </div>
              </Card>
            </Card.Body>
          </Card>

          {/* Kehadiran Saya */}
          <Card className="card-ethol">
            <Card.Body className="p-3">
              <h6 className="fw-bold mb-3 d-flex align-items-center gap-2"><FaChartBar /> Kehadiran Saya</h6>
              <Form.Select className="mb-3">
                <option>Konsep Teknologi Informasi</option>
              </Form.Select>

              <div className="d-flex gap-3 small mb-3">
                <span><span className="d-inline-block bg-ethol-blue me-1" style={{ width: 12, height: 12 }}></span> Hadir</span>
                <span><span className="d-inline-block border me-1" style={{ width: 12, height: 12 }}></span> Tidak Hadir</span>
              </div>

              <div className="d-flex gap-1 mb-2">
                {presensiData.map((val, i) => (
                  <div 
                    key={i} 
                    className={`flex-fill presensi-bar ${val === 0 ? 'absent' : ''} ${i === 10 ? 'active' : ''}`} 
                  />
                ))}
              </div>

              <div className="d-flex justify-content-between small text-muted">
                <span>Kehadiran: <strong>91%</strong></span>
                <span>Presensi ETHOL ke-<strong>11</strong></span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          {/* Tugas Belum Dikumpulkan */}
          <Card className="card-ethol mb-3">
            <Card.Body className="p-3">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold m-0"><FaFolderOpen /> Tugas Belum Dikumpulkan</h6>
                <span className="text-ethol-blue small fw-semibold cursor-pointer">Lihat Semua &rarr;</span>
              </div>

              <div className="border-bottom pb-2 mb-2">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-bold">Prak 6. Pointer1</div>
                    <div className="text-muted extra-small">Deadline: Selasa, 10 November 2026 - 10:10</div>
                  </div>
                  <Badge bg="warning" className="text-dark">Belum dikumpulkan</Badge>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-bold">Remidi uts</div>
                    <div className="text-muted extra-small">Deadline: Senin, 26 Oktober 2026 - 20:00</div>
                  </div>
                  <Badge bg="warning" className="text-dark">Belum dikumpulkan</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Layanan */}
          <Card className="card-ethol">
            <Card.Body className="p-3">
              <h6 className="fw-bold mb-3">Layanan</h6>
              <Row className="g-3 text-center">
                {layananList.map((lay, idx) => (
                  <Col xs={4} sm={2} lg={4} key={idx}>
                    <div className="p-3 bg-light rounded-circle mx-auto mb-2 text-ethol-blue d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px' }}>
                      {lay.icon}
                    </div>
                    <div className="extra-small fw-semibold text-dark">{lay.title}</div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}