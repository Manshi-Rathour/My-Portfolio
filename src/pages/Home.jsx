import React, { useEffect } from "react";
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";
import ContactMe from "../components/ContactMe";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="home" className="home-page">
      <About />
      <WhatIDo />
      <ContactMe />
    </div>
  );
}

export default Home;
