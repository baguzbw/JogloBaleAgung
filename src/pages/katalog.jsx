import React, { Component } from "react";
import Card from "../components/katalog/card";
import Header from "../components/katalog/header";

export default class Katalog extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}
