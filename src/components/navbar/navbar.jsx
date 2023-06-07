import { faFacebookF, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import Gallery from "../../components/home/gallery";
import Layanan from "../../components/home/layanan";
import Paket from "../../components/home/paket";
import Artikel from "../../pages/artikel";
import Event from "../../pages/event";
import Home from "../../pages/home";
import Homestay from "../../pages/homestay";
import Katalog from "../../pages/katalog";
import Kontak from "../../pages/kontak";
import Kuliner from "../../pages/kuliner";
import Pelatihan from "../../pages/pelatihan";
import ArticleDetail from "../artikel/artikeldetail";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./custom.css";

const MyNavbar = () => {
  const navigate = useNavigate();
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}navbar`)
      .then((response) => {
        console.log(response.data);
        if (response.data && response.data.length > 0) {
          setNavbarData(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  if (!navbarData) {
    return null;
  }
  const handleScrollClick = (target, path) => {
    if (window.location.pathname !== path) {
      navigate(path, { state: { scrollTo: target } });
    } else {
      scroller.scrollTo(target, {
        duration: 100,
        smooth: true,
      });
    }
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" className="transparent-navbar">
        <Container>
          <Navbar.Brand>
            <img src={`${API_GAMBAR_URL}${navbarData.logo_navbar}`} alt="Logo Joglo" width="62" height="62" className="w-8 h-8 mr-2" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="nav-link-custom">
                Home
              </Nav.Link>
              <NavDropdown title="Layanan" id="basic-nav-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item as={Link} to="/pelatihan" className="dropdown-item">
                  Pelatihan
                </NavDropdown.Item>
                <NavDropdown.Item as={ScrollLink} to="gallery" className="dropdown-item" onClick={() => handleScrollClick("gallery", "/home")}>
                  Produk & Motif
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/homestay" className="dropdown-item">
                  HomeStay
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kuliner" className="dropdown-item">
                  Kuliner
                </NavDropdown.Item>
                <NavDropdown.Item as={ScrollLink} to="paket" className="dropdown-item" onClick={() => handleScrollClick("paket", "/home")}>
                  Paket Alat & Bahan
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Informasi" id="basic-nav-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item as={Link} to="/event" className="dropdown-item">
                  Event
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/artikel" className="dropdown-item">
                  Artikel
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/katalog" className="dropdown-item">
                  Download Katalog & Brosur
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/kontak" className="nav-link-custom">
                Kontak
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href={navbarData.link_instagram} target="#">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
              <Nav.Link href={navbarData.link_tiktok} target="#">
                <FontAwesomeIcon icon={faTiktok} />
              </Nav.Link>
              <Nav.Link href={navbarData.link_facebook} target="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </Nav.Link>
              <Nav.Link href={navbarData.link_youtube} target="#">
                <FontAwesomeIcon icon={faYoutube} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/homestay" element={<Homestay />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/paket" element={<Paket />} />
        <Route path="/pelatihan" element={<Pelatihan />} />
        <Route path="/event" element={<Event />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/:id" element={<ArticleDetail key={window.location.pathname} />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </>
  );
};

export default MyNavbar;
