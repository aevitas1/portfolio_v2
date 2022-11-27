import './index.scss';
import ContentWrapper from "../../ContentWrapper";
import NavWrapper from "../../NavWrapper";

const PageInnerWrapper = () => {
    return (
        <div className="page_inner_wrapper">
            <ContentWrapper/>
            <NavWrapper/>
        </div>
    )
}

export default PageInnerWrapper;