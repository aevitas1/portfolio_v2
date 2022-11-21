import './index.scss';
import Header from "../../header";
import Navigation from "./navigation";
import Content from "./content";

const Innerwrapper = () => {
    return (
        <>
            <div className="inner_wrapper">
                <Header/>
                <div className="inner_main_wrapper">
                    <Content/>
                    <Navigation/>
                </div>

            </div>
        </>
    )
}

export default Innerwrapper;