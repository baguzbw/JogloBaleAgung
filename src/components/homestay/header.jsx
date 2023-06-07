import React, { Component } from "react";

export default class HeaderHomestay extends Component {
  render() {
    return (
      <div>
        <div className="p-5 text-center bg-image relative" style={{ backgroundImage: "url('https://i.pinimg.com/564x/1a/75/e2/1a75e29fd52d565fde6f63a48bf90bcf.jpg')", height: "400px" }}>
          <div className="bg-cover bg-center h-screen mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 fw-bold">HomeStay Joglo Bale Agung</h1>
                <h4 className="mb-3 fw-light">Cari penginapan di daerah Joglo Bale Agung</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
