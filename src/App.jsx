import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Possibilities from "./components/Possibilities/Possibilities";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Possibilities />
        <Faq />
        <Contact />
      </main>
    </>
  );
};

export default App;
