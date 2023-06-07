import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import GambarBatik from "../assets/batik.svg";
import GambarHomestay from "../assets/homestay.png";
import GambarKuliner from "../assets/kuliner.png";
import layananImage from "../assets/layanan.svg";
import GambarPaket from "../assets/paket.png";
import GambarProduk from "../assets/product.png";
import "./layanan.css";

const CardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">
        Layanan yang tersedia di
        <br /> Kampung Batik Joglo Bale Agung
      </h1>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          <div>
            <Link to="/pelatihan">
              <Card className="carousel-card" style={{ background: `url(${layananImage})`, backgroundSize: "cover" }}>
                <Card.Img className="illustration illustration-img" src={GambarBatik} />
                <Card.Body className="carousel-card-body">
                  <Card.Title>Pelatihan Membatik</Card.Title>
                  <Card.Text className="carousel-card-text mb-4">Pelatihan membatik dengan harga yang terjangkau</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div>
            <ScrollLink to="gallery" smooth={true} duration={200}>
              <Card className="carousel-card" style={{ background: `url(${layananImage})`, backgroundSize: "cover" }}>
                <Card.Img className="illustration illustration-img" src={GambarProduk} />
                <Card.Body className="carousel-card-body">
                  <Card.Title>Produk & Motif</Card.Title>
                  <Card.Text className="carousel-card-text mb-4">Berbagai macam produk & motif yang kami jual.</Card.Text>
                </Card.Body>
              </Card>
            </ScrollLink>
          </div>
          <div>
            <Link to="/homestay">
              <Card className="carousel-card" style={{ background: `url(${layananImage})`, backgroundSize: "cover" }}>
                <Card.Img className="illustration illustration-img" src={GambarHomestay} />
                <Card.Body className="carousel-card-body">
                  <Card.Title>HomeStay</Card.Title>
                  <Card.Text className="carousel-card-text mb-4">Menyediakan penginapan untuk anggota pelatihan</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div>
            <Link to="/kuliner">
              <Card className="carousel-card" style={{ background: `url(${layananImage})`, backgroundSize: "cover" }}>
                <Card.Img className="illustration illustration-img" src={GambarKuliner} />
                <Card.Body className="carousel-card-body">
                  <Card.Title>Kuliner</Card.Title>
                  <Card.Text className="carousel-card-text mb-4">Menyediakan banyak kuliner khas Jogja</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div>
            <ScrollLink to="paket" smooth={true} duration={200}>
              <Card className="carousel-card" style={{ background: `url(${layananImage})`, backgroundSize: "cover" }}>
                <Card.Img className="illustration illustration-img" src={GambarPaket} />
                <Card.Body className="carousel-card-body">
                  <Card.Title>Paket & Alat Batik</Card.Title>
                  <Card.Text className="carousel-card-text mb-4">Menyediakan Paket & Alat Batik untuk peserta diluar pulau.</Card.Text>
                </Card.Body>
              </Card>
            </ScrollLink>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
