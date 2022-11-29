import './index.scss';
import {useState} from 'react';


const MobileMenu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const removeBackground = () => {
        document.body.classList.remove('mobile_inactive');
    }

    const handleClick = () => {
        if (mobileOpen) {
            setMobileOpen(false);
            document.body.classList.remove('mobile_active');
            document.body.classList.add('mobile_inactive');
            setTimeout(removeBackground, 200);
        } else {
            setMobileOpen(true);
            document.body.classList.remove('mobile_inactive');
            document.body.classList.add('mobile_active');
        }
    }
    return (
        <>
            <div className="mobile_menu_wrapper">
                <div className="mobile_toggle_wrapper" onClick={handleClick}>
                    <div className={mobileOpen ? 'mobile_toggle active' : 'mobile_toggle'}>
                        <div className="top_bar"></div>
                        <div className="middle_bar"></div>
                        <div className="bottom_bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu;