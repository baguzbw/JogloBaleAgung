import React, { Component } from "react";
import Card from "../components/homestay/card";
import Header from "../components/homestay/header";

export default class Homestay extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}
