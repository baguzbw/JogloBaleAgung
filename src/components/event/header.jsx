import React, { Component } from "react";
import BgEvent from "../assets/bgevent.jpg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="p-5 text-center bg-image relative" style={{ backgroundImage: `url(${BgEvent})`, height: "400px" }}>
          <div className="bg-cover bg-center h-screen mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 fw-bold">Event Joglo Bale Agung</h1>
                <h4 className="mb-3 fw-light">Jangan Lewatkan Event-Event Terbaru</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
