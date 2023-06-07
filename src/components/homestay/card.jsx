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

export default class CardHomestay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homestays: [],
    };
  }

  componentDidMount() {
    axios.get(`${API_BASE_URL}homestay`).then((response) => {
      this.setState({ homestays: response.data });
    });
  }

  render() {
    const { homestays } = this.state;

    return (
      <div>
        <h1 className="container mt-5 fw-semibold">HomeStay Tersedia</h1>
        <img src={Line} alt="React Logo" className="mb-3" style={{ marginLeft: "130px" }} />
        <Row xs={1} md={3} className="g-4 container row row-cols-1 row-cols-md-3 g-4 mx-auto mt-5 mb-8 text-center">
          {homestays.map((homestay) => (
            <Col key={homestay.id}>
              <Card>
                <Card.Img variant="top" src={`${API_GAMBAR_URL}${homestay.gambar_homestay}`} className="cardImage" />
                <Card.Body>
                  <Card.Title>{homestay.nama_homestay}</Card.Title>
                  <Card.Text className="mx-auto">{homestay.deskripsi_homestay}</Card.Text>
                  <Card.Text className="mx-auto">
                    <FontAwesomeIcon icon={faMoneyBill} /> <b style={{ marginLeft: "2px" }}>Rp {homestay.harga_homestay.toLocaleString()}/Malam</b>
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
