import tokopediaIcon from "@iconify/icons-arcticons/tokopedia";
import shopeeIcon from "@iconify/icons-simple-icons/shopee";
import { Icon } from "@iconify/react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PaketCoklat from "../assets/paketcoklat.svg";
import PaketPutih from "../assets/paketputih.svg";
import { API_BASE_URL } from "../config";
import "./paket.css";

const Paket = () => {
  const [paketData, setPaketData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}paket_alat`);
        setPaketData(response.data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="title">Paket Alat dan bahan batik</h1>
          <p className="description">Menyediakan yang anda butuhkan untuk membatik bahkan dirumah sendiri.</p>
        </Col>
      </Row>
      <Row className="card-container">
        {paketData.map((paket_alat) => (
          <Col key={paket_alat.id} md={6}>
            <Card
              className="card-paket"
              style={{
                backgroundImage: `url(${paket_alat.id % 2 === 0 ? PaketCoklat : PaketPutih})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Card.Body className={`card-content ${paket_alat.id % 2 === 0 ? "card-content-white" : ""}`}>
                <div>
                  <Card.Title>{paket_alat.nama_paket_alat}</Card.Title>
                  <Card.Text>{paket_alat.deskripsi_paket_alat}</Card.Text>
                  <Card.Text className="price">Rp {paket_alat.harga_paket_alat.toLocaleString()}</Card.Text>
                  <div>
                    <a className="btn-custom btn-custom-1" href={paket_alat.link_shopee} target="_blank" rel="noopener noreferrer">
                      <Icon icon={shopeeIcon} /> Shopee
                    </a>
                    <a className="btn-custom btn-custom-2" href={paket_alat.link_tokopedia} target="_blank" rel="noopener noreferrer">
                      <Icon icon={tokopediaIcon} /> Tokopedia
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Paket;
