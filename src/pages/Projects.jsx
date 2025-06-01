import React, { useEffect } from "react";
import ProjectsHeader from "../components/ProjectsHeader";
import AllProjects from "../components/AllProjects";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="project" className="project-page">
      <ProjectsHeader />
      <AllProjects />
    </div>
  );
}

export default Projects;
