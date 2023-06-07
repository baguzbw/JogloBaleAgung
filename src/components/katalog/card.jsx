import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Line from "../assets/Line3.svg";
import { API_BASE_URL, API_GAMBAR_URL } from "../config";
import "./custom.css";

export default class Catalogcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogItems: [],
    };
  }

  componentDidMount() {
    axios.get(`${API_BASE_URL}katalog`).then((response) => {
      this.setState({ catalogItems: response.data });
    });
  }

  render() {
    const { catalogItems } = this.state;

    return (
      <div>
        <h1 className="container mt-5 fw-semibold">Download</h1>
        <img src={Line} alt="React Logo" className="mb-3" style={{ marginLeft: "130px" }} />
        <Row xs={1} md={2} className="g-4 container row row-cols-1 row-cols-md-2 g-4 mx-auto mt-5 mb-8">
          {catalogItems.map((katalog) => (
            <Col key={katalog.id}>
              <Card className="catalog-card">
                <div className="image-container">
                  <Card.Img variant="top" src={`${API_GAMBAR_URL}${katalog.gambar_katalog}`} style={{ height: "420px" }} />
                </div>
                <Card.Body className="card-body-katalog">
                  <Card.Title>
                    <FontAwesomeIcon icon={faFilePdf} className="me-2" />
                    {katalog.nama_katalog}
                  </Card.Title>
                  <Button className="btn-katalog" href={katalog.download_katalog} target="_blank" rel="noopener noreferrer">
                    Download
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
