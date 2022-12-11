import styles from "./pagewrapper.module.scss";
import Card from "../content/card/Card";
import foodfreedom from "../../assets/projects/foodfreedom.png";

const Pagewrapper = () => {
  return (
    <>
      <div className={styles.pagewrapper}>
        <div className={styles.inner_wrapper}>
          <Card
            image={foodfreedom}
            projectName="Foodfreedom"
            description="First website bla di bla di lorem ipsum dolor"
            usedBootstrap={true}
            usedTypescript={true}
            usedSass={true}
            usedJavascript={true}
            usedReact={true}
            usedCss={true}
            usedHtml={false}
            codeLink="www.google.nl"
            projectLink="www.google.com"
          />
        </div>
      </div>
    </>
  );
};

export default Pagewrapper;
