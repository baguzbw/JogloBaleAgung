import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import BackgroundGallery from "../assets/gallery.jpg";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";

const GalleryComponent = () => {
  const [cardFilter, setCardFilter] = useState(1);
  const [showAllCards, setShowAllCards] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}gallery`)
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    setShowAllCards(false);
  }, [cardFilter]);

  const filteredCards = cardData.filter((card) => card.jenis_gallery === cardFilter);

  const visibleCards = showAllCards ? filteredCards : filteredCards.slice(0, 4);

  const openModal = (card) => {
    setCurrentCard(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setCurrentCard(null);
    setShowModal(false);
  };

  const renderCard = (card) => (
    <div onClick={() => openModal(card)} style={{ position: "relative", width: "580px", height: "290px", borderRadius: "10px" }}>
      <img
        src={`${API_GAMBAR_URL}${card.gambar_gallery}`}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          transition: "transform 0.3s ease-out",
          transformOrigin: "center",
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
        alt={card.judul_gallery}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Title style={{ color: "white", textAlign: "center" }}>{card.judul_gallery}</Card.Title>
        <Card.Text style={{ color: "white", textAlign: "center" }}>{card.subjudul_gallery}</Card.Text>
      </div>
    </div>
  );

  return (
    <Container>
      <h1 className="text-center mb-4 mt-5 fw-bold">Gallery Joglo Bale Agung</h1>
      <p className="text-center">Beberapa Gallery Produk & Motif yang dibuat di Joglo Bale Agung Cendana</p>
      <Row className="mt-4 mb-4">
        <Col className="text-center">
          <Button onClick={() => setCardFilter(1)} variant={cardFilter === 1 ? "dark" : "outline-dark"}>
            Produk
          </Button>{" "}
          <Button onClick={() => setCardFilter(2)} variant={cardFilter === 2 ? "dark" : "outline-dark"}>
            Motif
          </Button>
        </Col>
      </Row>

      <Row>
        {visibleCards.map((card, index) => (
          <Col key={index} md={6} className="d-flex justify-content-center mb-4">
            {renderCard(card)}
          </Col>
        ))}
      </Row>
      <Row className="mt-2 mb-5">
        <Col className="text-center">
          {!showAllCards && filteredCards.length > 4 ? (
            <Button variant="outline-dark" onClick={() => setShowAllCards(true)}>
              Lebih Banyak
            </Button>
          ) : (
            showAllCards && (
              <Button variant="outline-dark" onClick={() => setShowAllCards(false)}>
                Kecilkan
              </Button>
            )
          )}
        </Col>
      </Row>

      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body style={{ padding: "20px", backgroundImage: `url(${BackgroundGallery})`, backgroundSize: "40%", backgroundPosition: "right", backgroundRepeat: "no-repeat" }}>
          <Row>
            <Col xs={12} md={6}>
              <img src={`${API_GAMBAR_URL}${currentCard?.gambar_gallery}`} alt={currentCard?.judul_gallery} style={{ width: "100%", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }} />
            </Col>
            <Col xs={12} md={6}>
              <h1 style={{ fontSize: "34px", fontWeight: "bold" }}>{currentCard?.judul_gallery}</h1>
              <p style={{ fontSize: "18px", fontWeight: "400" }}>{currentCard?.subjudul_gallery}</p>
              <p style={{ fontSize: "14px", fontWeight: "350" }} dangerouslySetInnerHTML={{ __html: currentCard?.deskripsi_gallery }}></p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default GalleryComponent;
