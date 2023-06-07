import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Line from "../assets/Line3.svg";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./card.css";

export default class CardKuliner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kuliners: [],
    };
  }

  componentDidMount() {
    axios.get(`${API_BASE_URL}kuliner`).then((response) => {
      this.setState({ kuliners: response.data });
    });
  }

  render() {
    const { kuliners } = this.state;

    return (
      <div>
        <h1 className="container mt-5 fw-semibold">Kuliner Terpopuler</h1>
        <img src={Line} alt="React Logo" className="mb-3" style={{ marginLeft: "130px" }} />
        <Row xs={1} md={3} className="g-4 container row row-cols-1 row-cols-md-3 g-4 mx-auto mt-5 mb-8 text-center">
          {kuliners.map((kuliner) => (
            <Col key={kuliner.id}>
              <Card>
                <Card.Img variant="top" src={`${API_GAMBAR_URL}${kuliner.gambar_kuliner}`} className="cardImage" />
                <Card.Body>
                  <Card.Title>{kuliner.nama_kuliner}</Card.Title>
                  <Card.Text className="mx-auto">{kuliner.deskripsi_kuliner}</Card.Text>
                  <Card.Text className="mx-auto">
                    <FontAwesomeIcon icon={faMoneyBill} /> <b style={{ marginLeft: "2px" }}> Rp {kuliner.harga_kuliner.toLocaleString()}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
