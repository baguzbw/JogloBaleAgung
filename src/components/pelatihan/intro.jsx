import axios from "axios";
import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./intro.css";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_pelatihan: "",
      deskripsi_pelatihan: "",
      gambar_pelatihan: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${API_BASE_URL}pelatihan`)
      .then((response) => {
        const firstpelatihan = response.data[0];
        this.setState({
          nama_pelatihan: firstpelatihan.nama_pelatihan,
          deskripsi_pelatihan: firstpelatihan.deskripsi_pelatihan,
          gambar_pelatihan: firstpelatihan.gambar_pelatihan,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { nama_pelatihan, deskripsi_pelatihan, gambar_pelatihan } = this.state;

    return (
      <div className="section">
        <Container fluid>
          <Row>
            <Col md={6} className="image-center-left">
              <Image src={`${API_GAMBAR_URL}${gambar_pelatihan}`} width={474} height={478} alt="Latihan" className="image-rounded" />
            </Col>
            <Col md={6} className="title-desc">
              <h1 className="fw-bold mt-5 mb-5 center">{nama_pelatihan}</h1>
              <div className="mb-5" dangerouslySetInnerHTML={{ __html: deskripsi_pelatihan }} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
