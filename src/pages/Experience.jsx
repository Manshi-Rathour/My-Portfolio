import React, { useEffect } from "react";
import ExperienceHeader from "../components/ExperienceHeader";
import ExperienceTimeline from "../components/ExperienceTimeline";

function Experience() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="experience" className="experience-page">
        <ExperienceHeader />
        <ExperienceTimeline />
    </div>
  );
}

export default Experience;
