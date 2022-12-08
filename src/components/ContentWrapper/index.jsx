import "./index.scss";
import Logo from "./Logo";
import Content from "./Content";
import MobileMenu from "./MobileMenu";
import Icons from "../NavWrapper/Icons";

const ContentWrapper = () => {
  return (
    <>
      <main>
        <div className="top_bar_content">
          <Logo />
          <Icons />
          <MobileMenu />
        </div>
        <Content />
      </main>
    </>
  );
};

export default ContentWrapper;
