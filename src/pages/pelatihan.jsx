import React, { Component } from "react";
import Form from "../components/pelatihan/form";
import Header from "../components/pelatihan/header";
import Intro from "../components/pelatihan/intro";

export default class Pelatihan extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Form />
      </div>
    );
  }
}
