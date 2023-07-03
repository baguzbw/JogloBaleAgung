import axios from "axios";
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdb-react-ui-kit";
import React, { Component } from "react";
import LogoSV from "../assets/LOGO-SV.png";
import LogoTIUNS from "../assets/TIUNS.png";
import LogoUNS from "../assets/UNS.png";
import Lifemedia from "../assets/lifemedia.png";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./custom.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerData: null,
    };
  }

  componentDidMount() {
    axios.get(`${API_BASE_URL}footer`).then((response) => {
      if (response.data && response.data.length > 0) {
        this.setState({ footerData: response.data[0] });
      }
    });
  }

  render() {
    const { footerData } = this.state;

    if (!footerData) {
      return null;
    }

    return (
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4"></section>
        <section className="">
          <MDBContainer className="text-center text-md-start">
            <MDBRow className="">
              <MDBCol md="2" lg="4" xl="3" className="mx-auto mb-4 mt-4">
                <img src={`${API_GAMBAR_URL}${footerData.gambar_footer}`} alt="Logo" width="100" height="100" />
                <h6 className="text-uppercase fw-bold mb-4 mt-5">{footerData.nama_footer}</h6>
                <p>{footerData.alamat_footer}</p>
                <p>
                  <a href="/home" className="text-decoration-none" rel="noreferrer">
                    Home
                  </a>
                  <a href="/kontak" target={"_blank"} className="text-decoration-none ms-3" rel="noreferrer">
                    Kontak
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4"></MDBCol>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.576925059606!2d110.37588666977537!3d-7.801021400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a577be2f1aa2b%3A0xa2afcf1b6c58a40b!2sJl.%20Cendana%20No.10%2C%20Semaki%2C%20Kec.%20Umbulharjo%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055166!5e0!3m2!1sid!2sid!4v1679509590892!5m2!1sid!2sid"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className="map-iframe"
                />
              </div>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023 Copyright | &nbsp;
          <a className="text-reset fw-bold" href="/">
            Joglo Bale Agung Cendana
          </a>
          <p class="fs-12">
            Made and Colaboration with <span class="heart"></span>:
          </p>
          <div className="image-row justify-content-center">
            <img src={LogoUNS} alt="logo UNS" />
            <img src={LogoSV} alt="logo SV" />
            <img src={LogoTIUNS} alt="logo TI UNS" />
            <img src={Lifemedia} alt="logo lifemedia" />
          </div>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
