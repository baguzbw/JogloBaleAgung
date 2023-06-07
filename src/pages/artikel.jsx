import React, { Component } from "react";

import Content from "../components/artikel/content";
import Header from "../components/artikel/header";

export default class Artikel extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
