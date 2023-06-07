import React, { Component } from "react";
import imagebackground from "../assets/kontak.svg"

export default class Kontak extends Component {
  render() {
    return (
      <div>
        <div className="p-5 text-center bg-image relative" style={{ backgroundImage: `url(${imagebackground})`, height: "400px" }}>
          <div className="bg-cover bg-center h-screen mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 fw-bold">Kontak</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
