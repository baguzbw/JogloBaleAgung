import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Line from "../assets/Line3.svg";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./content.css";

function Artikel() {
  const [fillActive, setFillActive] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [semuaCards, setSemuaCards] = useState([]);
  const cardsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}artikel`);
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

  const filteredCards = semuaCards.filter((card) => card.jenis_artikel === fillActive);

  filteredCards.sort((a, b) => new Date(b.tanggal_artikel) - new Date(a.tanggal_artikel));

  const displayedCards = paginate(filteredCards);

  const sliceDescription = (description, numSentences) => {
    const sentences = description.split(".");
    const slicedSentences = sentences.slice(0, numSentences);
    return { __html: `${slicedSentences.join(". ")}` };
  };

  return (
    <>
      <div className="container mb-4">
        <h1 className="container mt-5 fw-semibold">Artikel Terbaru</h1>
        <img src={Line} alt="React Logo" className="mb-3" style={{ marginLeft: "10px" }} />
      </div>

      <div className="container">
        <div className="d-flex justify-content-end mb-3">
          <button className={`btn btn-custom-size btn-${fillActive === 1 ? "dark" : "outline-dark"} mx-1`} onClick={() => handleFillClick(1)}>
            Sejarah
          </button>
          <button className={`btn btn-custom-size btn-${fillActive === 2 ? "dark" : "outline-dark"} mx-1`} onClick={() => handleFillClick(2)}>
            Edukasi
          </button>
        </div>

        {displayedCards.map((card) => (
          <div key={card.judul_artikel} className="card mb-3 card-custom">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`${API_GAMBAR_URL}${card.gambar_artikel}`} alt={card.judul_artikel} className="img-fluid" style={{ objectFit: "cover", height: "400px", width: "1000px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body card-body-custom">
                  <h1 className="card-judul_artikel">{card.judul_artikel}</h1>
                  <p className="card-text mt-2">
                    <p className="date-semi-bold">
                      <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
                      {new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(card.tanggal_artikel))}
                    </p>
                  </p>
                  <p className="card-text mt-4 mb-5" dangerouslySetInnerHTML={sliceDescription(card.deskripsi_artikel, 1)}></p>
                  <Button href={`/artikel/${card.id}`} className="btn-modif" style={{ width: 220, height: 70 }}>
                    Baca Selengkapnya
                  </Button>
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

export default Artikel;
