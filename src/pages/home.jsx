import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Form from "../components/home/form";
import Gallery from "../components/home/gallery";
import Hero from "../components/home/hero";
import Layanan from "../components/home/layanan";
import Paket from "../components/home/paket";
import Sejarah from "../components/home/sejarah";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 100,
        smooth: true,
      });
    }
  }, [location.state]);

  return (
    <div>
      <Hero />
      <div id="layanan">
        <Layanan />
      </div>
      <Sejarah />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="paket">
        <Paket />
      </div>
      <Form />
    </div>
  );
};

export default Home;
