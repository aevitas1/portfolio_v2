import Card from "../Card";
import foodfreedom from "../../../../assets/projects/Screenshot 2022-11-29 at 00.52.27.png";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="project_wrapper">
        <Card
          image={foodfreedom}
          projectName="Foodfreedom"
          description="The final project I made for my HTML/CSS study. The final project I made for my HTML/CSS study."
          projectLink="https://aevitas1.github.io/"
          codeLink="https://aevitas1.github.io/"
          javascript={true}
          bootstrap={true}
          html={true}
          className="first"
          id={1}
        />
      </div>
    </>
  );
};

export default Projects;
