import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { FaEdit, FaFileAlt } from 'react-icons/fa';

export default function TugasOnline() {
  return (
    <div className="pb-4">
      <div className="text-muted small mb-3">Mahasiswa &gt; <strong className="text-ethol-blue">Tugas Online</strong></div>
      
      <h5 className="fw-bold d-flex align-items-center gap-2 mb-1">
        <FaEdit /> Tugas Online
      </h5>
      <p className="text-muted small mb-4">Pantau dan kumpulkan tugas matakuliah semester ini</p>

      <Card className="card-ethol">
        <Card.Body className="p-4">
          <Row className="mb-4">
            <Col md={5}>
              <Form.Label className="small text-muted mb-1">Kuliah</Form.Label>
              <Form.Select>
                <option>Konsep Teknologi Informasi</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="text-center py-5">
            <FaFileAlt size={60} className="text-black-50 mb-3" />
            <p className="text-muted m-0">Belum ada tugas untuk matakuliah ini</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}