import React, { useEffect } from "react";
import ProjectsHeader from "../components/ProjectsHeader";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="project" className="project-page">
      <ProjectsHeader />
    </div>
  );
}

export default Projects;
