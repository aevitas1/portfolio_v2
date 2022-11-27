import './index.scss';
import Credits from "./Credits";
import Menu from "./Menu";
import Icons from "./Icons";

const NavWrapper = () => {
    return (
        <>
            <nav>
                <div className="nav_wrapper">
                    <div className="nav_top">
                        <Icons/>
                    </div>
                    <div className="nav_content">
                        <Menu/>
                    </div>
                </div>
                <Credits/>
            </nav>

        </>
    )
}

export default NavWrapper;