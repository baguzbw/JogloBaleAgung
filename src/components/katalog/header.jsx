import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="p-5 text-center bg-image relative" style={{ backgroundImage: "url('https://i.pinimg.com/564x/b1/12/b2/b112b21c44509fce3bd7e54ceae6e3a1.jpg')", height: "400px" }}>
          <div className="bg-cover bg-center h-screen mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 fw-bold">Katalog & Brosur</h1>
                <h4 className="mb-3 fw-light">Katalog Produk dan Brosur Event</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
