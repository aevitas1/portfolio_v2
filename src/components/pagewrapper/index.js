import './index.scss';
import Innerwrapper from "./innerwrapper";

const PageWrapper = () => {
    return (
        <>
            <div className="outer_wrapper">
                <div className="body_html"></div>
                <Innerwrapper/>
                <div className="body_html_close"></div>
            </div>
        </>
    )
}

export default PageWrapper;