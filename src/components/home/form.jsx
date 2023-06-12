import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { API_BASE_URL } from "../config";
import "./form.css";

const FormHome = () => {
  const [nama, setNama] = useState("");
  const [noTelp, setnoTelp] = useState("");
  const [email, setemail] = useState("");
  const [pesan, setpesan] = useState("");
  const SITE_KEY = process.env.REACT_APP_SITE_KEY;
  const [captchaDanger, setCaptchaDanger] = useState("none");
  const captchaRef = useRef(null);

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
        const tokenResponse = await axios.get(`${API_BASE_URL}csrf-token`);
        const csrfToken = tokenResponse.data.csrfToken;

        const response = await axios.post(
          `${API_BASE_URL}bukutamu`,
          {
            nama: nama,
            noTelp: noTelp,
            email: email,
            pesan: pesan,
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
        setpesan("");
        console.log(response.data);
        alert("Data berhasil dikirim!");
      } catch (error) {
        console.error("Terjadi kesalahan saat mengirim data", error);
        alert("Terjadi kesalahan saat mengirim data");
      }
    }
  };

  return (
    <Container fluid className="my-form d-flex align-items-center">
      <Row className="justify-content-center w-100">
        <Col xs={12} className="text-center mb-5">
          <h1>Tinggalkan Pesan</h1>
        </Col>
        <Col xs={10}>
          <Form>
            <Form.Group controlId="formNamaLengkap" className="mb-3">
              <Form.Control type="text" placeholder="Nama Lengkap" name="nama" value={nama} onChange={(text) => setNama(text.target.value)} className="form-size" />
            </Form.Group>
            <Row className="justify-content-between mb-3">
              <Col xs={10} sm={6}>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(text) => setemail(text.target.value)} className="form-size" />
                </Form.Group>
              </Col>
              <Col xs={10} sm={6}>
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
              </Col>
            </Row>
            <Form.Group controlId="formPesan" className="mb-3">
              <Form.Control as="textarea" name="pesan" value={pesan} onChange={(text) => setpesan(text.target.value)} placeholder="Pesan" className="form-size" />
            </Form.Group>
            <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} />
            <p style={{ color: "red", display: captchaDanger }}> Silahkan lengkapi captcha terlebih dahulu! </p>
            <div className="d-flex">
              <Button type="button" className="button-size" onClick={handleSubmit}>
                Kirim Pesan
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default FormHome;
