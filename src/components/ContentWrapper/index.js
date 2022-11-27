import './index.scss';
import Logo from "./Logo";
import Content from "./Content";
import MobileMenu from "./MobileMenu";

const ContentWrapper = () => {
    return (
        <>
            <main>
                <div className="top_bar_content">
                    <Logo/>
                    <MobileMenu/>
                </div>
                <Content/>
            </main>
        </>

    )
}

export default ContentWrapper;