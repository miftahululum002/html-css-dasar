// import { useState } from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GreetingBanner from "./components/GreetingBanner";
import Header from "./components/Header";
import Sejarah from "./components/Sejarah";
import VisiMisi from "./components/VisiMisi";

function App() {
  return (
    <>
      <Header />
      <GreetingBanner />
      <Sejarah />
      <VisiMisi />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
