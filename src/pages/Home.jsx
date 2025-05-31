import React, { useEffect } from "react";
import About from "../components/About";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="home" className="home-page">
      <About />
    </div>
  );
}

export default Home;
