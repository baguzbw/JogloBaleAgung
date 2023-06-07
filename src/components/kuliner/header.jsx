import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="p-5 text-center bg-image relative" style={{ backgroundImage: "url('https://i.pinimg.com/564x/78/b8/5d/78b85d094f2845ec137b0fe3f00acf48.jpg')", height: "400px" }}>
          <div className="bg-cover bg-center h-screen mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 fw-bold">Kuliner Joglo Bale Agung</h1>
                <h4 className="mb-3 fw-light">Masakan tradisional khas desa Joglo Bale Agung</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
