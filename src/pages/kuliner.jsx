import React, { Component } from "react";
import Card from "../components/kuliner/card";
import Header from "../components/kuliner/header";

export default class Kuliner extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}
