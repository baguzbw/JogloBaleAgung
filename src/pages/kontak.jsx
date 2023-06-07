import React, { Component } from "react";
import Card from "../components/kontak/card";
import Header from "../components/kontak/header";

export default class Kontak extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}
