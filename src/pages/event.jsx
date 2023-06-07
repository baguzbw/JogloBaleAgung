import React, { Component } from "react";
import Card from "../components/event/card";
import Header from "../components/event/header";

export default class Event extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}
