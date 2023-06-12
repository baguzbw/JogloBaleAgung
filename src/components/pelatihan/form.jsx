import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { API_BASE_URL } from "../config";
import "./form.css";

const DataPendaftar = () => {
  const [nama, setNama] = useState("");
  const [noTelp, setnoTelp] = useState("");
  const [email, setemail] = useState("");
  const [jenis, setjenis] = useState("");
  const [jenisOptions, setJenisOptions] = useState([]);
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  const [captchaDanger, setCaptchaDanger] = useState("none");
  const captchaRef = useRef(null);

  useEffect(() => {
    fetchJenisOptions();
  }, []);

  const fetchJenisOptions = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}jenis_pelatihan`);
      setJenisOptions(response.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil opsi jenis pelatihan", error);
      // Handle error case
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (token === "") {
      setCaptchaDanger("block");
    } else {
      setCaptchaDanger("none");
      try {
        // Retrieve the CSRF token from your server
        const tokenResponse = await axios.get(`${API_BASE_URL}csrf-token1`);
        const csrfToken = tokenResponse.data.csrfToken;

        const response = await axios.post(
          `${API_BASE_URL}pendaftar`,
          {
            nama: nama,
            noTelp: noTelp,
            email: email,
            jenis: jenis,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-TOKEN": csrfToken, // Include the CSRF token in the header
            },
          }
        );
        setNama("");
        setnoTelp("");
        setemail("");
        setjenis("");
        console.log(response.data);
        alert("Data berhasil dikirim!");
      } catch (error) {
        console.error("Terjadi kesalahan saat mengirim data", error);
        alert("Terjadi kesalahan saat mengirim data");
      }
    }
  };

  const handleContact = () => {
    const phoneNumber = "+6287700537898";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Container className={`d-flex justify-content-center dataPendaftar-container`}>
      <Row>
        <Col xs={12} className="dataPendaftar-col">
          <Card className="dataPendaftar-card">
            <Card.Body>
              <Card.Title>Data Pendaftar</Card.Title>
              <Form>
                <Form.Label>Nama Pendaftar</Form.Label>
                <Form.Group controlId="formNamaLengkap" className="mb-3">
                  <Form.Control type="text" placeholder="Nama Pendaftar" name="nama" value={nama} onChange={(text) => setNama(text.target.value)} className="form-size" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(text) => setemail(text.target.value)} className="form-size" />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Jenis Pelatihan</Form.Label>
                  <Form.Select style={{ height: "64px", borderRadius: "10px" }} name="jenis" defaultValue="default" value={jenis} onChange={(text) => setjenis(text.target.value)}>
                    <option value="default" disabled>
                      Pilih Pelatihan...
                    </option>
                    {jenisOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.nama_jenis_pelatihan}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>No Telp</Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1" style={{ height: "64px" }}>
                      +62
                    </InputGroup.Text>
                    <Form.Control
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      placeholder="Masukkan nomor telepon"
                      name="noTelp"
                      value={noTelp}
                      onChange={(text) => setnoTelp(text.target.value)}
                      className="form-control"
                      style={{ height: "64px" }}
                    />
                  </InputGroup>
                </Form.Group>
                <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} />
                <p style={{ color: "red", display: captchaDanger }}> Silahkan lengkapi captcha terlebih dahulu! </p>
                <Button style={{ marginTop: "20px" }} type="button" className="daftarBtn" onClick={handleSubmit}>
                  Daftar
                </Button>
                <br />
                <a href={`https://wa.me/+6287700537898`} target="_blank" rel="noreferrer">
                  <Button className="hubungiBtn" onClick={handleContact}>
                    <FontAwesomeIcon icon={faWhatsapp} /> Hubungi Langsung
                  </Button>
                </a>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DataPendaftar;
