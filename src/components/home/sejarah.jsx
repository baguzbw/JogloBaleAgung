import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import bgsejarah from "../assets/bgsejarah.jpg";
import "./Sejarah.css";

const Sejarah = () => {
  return (
    <div className="section">
      <Container fluid>
        <Row>
          <Col md={6} className="image-center-left">
            <Image src={bgsejarah} width={474} height={478} alt="Sejarah" className="image-rounded" />
          </Col>
          <Col md={6} className="title-desc">
            <h1 className="fw-bold mb-5">Sejarah Terbentuknya Joglo Bale Agung Cendana</h1>
            <p className="mb-5">
              Joglo Balai Agung Cendana terletak di Jalan Cendana No.10 B,Yogyakarta. Di Joglo Balai Agung merupakan kampung wisata batik yang sudah memiliki umur yang panjang.Disini terdapat pelatihan membatik secara gratis untuk
              masyarakat umum dan masih menggunakan pewarnaan alami untuk mengurangi limbah air dari penggunaan pewarnaan sintetis.
            </p>
            <Button href="/artikel" className="baca-button" style={{ width: 230, height: 70 }}>
              Baca Selengkapnya
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sejarah;
