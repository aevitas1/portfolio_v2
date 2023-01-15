import ProjectPage from "./projectpage/ProjectPage";
import desktopTibia from "../../../../assets/projects/tibia/tibia_desktop.png";
import tabletTibia from "../../../../assets/projects/tibia/tibia_tablet.png";
import mobileTibia from "../../../../assets/projects/tibia/tibia_mobile.png";
const TibiaDamageCalc = () => {
  return (
    <ProjectPage
      desktopImage={desktopTibia}
      tabletImage={tabletTibia}
      mobileImage={mobileTibia}
      projectName="Tibia damage calculator"
      description="Tibia app"
      usedHtml={true}
      usedCss={true}
      usedSass={true}
      usedJavascript={true}
      usedBootstrap={true}
      usedTypescript={true}
      usedReact={true}
      codeLink="www.google.nl"
      projectLink="www.google.com"
    />
  );
};

export default TibiaDamageCalc;
