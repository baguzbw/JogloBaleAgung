import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./card.css";

export default class CardKontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kontaks: [],
    };
  }

  componentDidMount() {
    axios.get(`${API_BASE_URL}kontak_admin`).then((response) => {
      this.setState({ kontaks: response.data });
    });
  }

  render() {
    const { kontaks } = this.state;

    return (
      <div style={{ backgroundColor: "#F1D299", height: "auto", paddingBottom: "30px", paddingTop: "30px" }}>
        <Row xs={1} md={3} className="g-4 container row row-cols-1 row-cols-md-3 g-4 mx-auto">
          {kontaks.map((kontak) => (
            <Col key={kontak.id}>
              <Card style={{ width: "340px", height: "380px" }}>
                <Card.Img variant="top" src={`${API_GAMBAR_URL}${kontak.gambar_kontak_admin}`} className="rounded-circle ms-3  mt-4" style={{ width: "100px", height: "100px" }} />
                <Card.Body>
                  <Card.Title className="text-left">{kontak.nama_kontak_admin}</Card.Title>
                  <Card.Text className="text-left d-flex align-items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    <span>{kontak.email_kontak_admin}</span>
                  </Card.Text>
                  <Card.Text className="text-left d-flex align-items-center">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    <span>{kontak.nomor_kontak_admin}</span>
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
