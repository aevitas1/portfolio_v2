import Card from "../Card";
import foodfreedom from '../../../../assets/projects/Screenshot 2022-11-29 at 00.52.27.png';

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <Card image={foodfreedom}
                  projectName="Foodfreedom"
                  description="Buy mealboxes here"
                  projectLink="https://aevitas1.github.io/"
                  codeLink="https://aevitas1.github.io/"
                  bootstrap={true}
                  css={true}
                  javascript={true}
                  html={true}
                  react={true}
                  sass={true}

            />
        </>
    )
}

export default Projects;

// image
// projectName
// projectLink
// codeLink
// description
// bootstrap
// css
// javascript
// react
// sass