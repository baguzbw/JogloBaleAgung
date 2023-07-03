import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Line from "../assets/Line3.svg";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./card.css";

function Event() {
  const [fillActive, setFillActive] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [semuaCards, setSemuaCards] = useState([]);
  const cardsPerPage = 4;
  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}event`);
        setSemuaCards(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFillClick = (category) => {
    setFillActive(category);
    setCurrentPage(1);
  };

  const paginate = (cards) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.slice(startIndex, endIndex);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = (totalCards) => {
    const pageCount = Math.ceil(totalCards / cardsPerPage);
    const buttons = [];

    for (let i = 1; i <= pageCount; i++) {
      buttons.push(
        <button key={i} className={`btn btn-${currentPage === i ? "dark" : "outline-dark"} mx-1`} onClick={() => handlePageClick(i)}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setModalShow(true);
  };

  const filteredCards = semuaCards.filter((card) => card.jenis_event === fillActive);

  filteredCards.sort((a, b) => new Date(b.tanggal_event) - new Date(a.tanggal_event));

  const displayedCards = paginate(filteredCards);

  return (
    <>
      <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="d-flex justify-content-center">
          <img src={modalImage} alt="Modal pic" className="img-fluid modal-image" />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setModalShow(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <div className="container mb-4">
        <h1 className="container mt-5 fw-semibold">Event Terbaru</h1>
        <img src={Line} alt="React Logo" className="mb-3" style={{ marginLeft: "10px" }} />
      </div>

      <div className="container">
        <div className="d-flex justify-content-end mb-3">
          <button className={`btn btn-custom-size btn-${fillActive === 1 ? "dark" : "outline-dark"} mx-1`} onClick={() => handleFillClick(1)}>
            Pelatihan
          </button>
          <button className={`btn btn-custom-size btn-${fillActive === 2 ? "dark" : "outline-dark"} mx-1`} onClick={() => handleFillClick(2)}>
            Pameran
          </button>
        </div>

        {displayedCards.map((card) => (
          <div key={card.nama_event} className="card mb-3 card-custom">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`${API_GAMBAR_URL}${card.gambar_event}`}
                  alt={card.nama_event}
                  className="img-fluid"
                  style={{ objectFit: "cover", height: "400px", width: "1000px" }}
                  onClick={() => handleImageClick(`${API_GAMBAR_URL}${card.gambar_event}`)}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body card-body-custom">
                  <h1 className="card-nama_event">{card.nama_event}</h1>
                  <p className="card-text mt-3">
                    <p className="date-semi-bold">
                      <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
                      {new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(card.tanggal_event))}
                    </p>
                  </p>
                  <p className="card-text mt-5">{card.deskripsi_event}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-center mt-3 mb-5">{renderPaginationButtons(filteredCards.length)}</div>
      </div>
    </>
  );
}

export default Event;
