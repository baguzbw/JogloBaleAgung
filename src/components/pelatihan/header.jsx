import React, { Component } from "react";
import BgPelatihan from "../assets/bgpelatihan.jpg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="p-5 text-center bg-image relative" style={{ backgroundImage: `url(${BgPelatihan})`, height: "400px" }}>
          <div className="bg-cover bg-center h-screen mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 fw-bold">Pendaftaran Pelatihan Batik</h1>
                <h4 className="mb-3 fw-light">Formulir pendaftaran kelas pelatihan membatik</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
