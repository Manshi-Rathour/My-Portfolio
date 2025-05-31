import React, { useEffect } from "react";
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="home" className="home-page">
      <About />
      <WhatIDo />
    </div>
  );
}

export default Home;
