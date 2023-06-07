import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import backgroundImage from "../assets/bghero.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-mask"></div>
      <div className="hero-content">
        <h2 className="mb-4">ꦱꦼꦭꦩꦠ꧀ꦝꦠꦁꦣꦶ</h2>
        <h1 className="hero-title fw-bold">
          Kampung Wisata Batik dan Budaya <br />
          Joglo Bale Agung Cendana
        </h1>
        <p className="hero-description fw-semibold">
          Menyelami keindahan budaya batik
          <br />
          Temukan pengalaman wisata yang tak terlupakan.
        </p>
        <button className="jelajahi-btn" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}>
          Jelajahi
        </button>
        <button className="video-button" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlay} />
          Tonton Video
        </button>
      </div>
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/HVhFnqNPGG8" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeroSection;
