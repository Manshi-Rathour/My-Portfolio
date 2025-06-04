import React, { useEffect } from "react";
import EducationHeader from "../components/EducationHeader";
import Amity from "../components/Amity";
import Certificates from "../components/Certificates";

function Education() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="education" className="education-page">
        <EducationHeader />
        <Amity />
        <Certificates />
    </div>
  );
}

export default Education;
