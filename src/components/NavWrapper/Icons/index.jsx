import './index.scss';
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {BsFillEnvelopeFill} from 'react-icons/bs';

const Icons = () => {
    return (
        <>
            <div className="icon_wrapper">
                <a href="https://nl.linkedin.com/in/stephan-vd-m" rel="noreferrer" target="_blank">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/aevitas1" rel="noreferrer" target="_blank">
                    <FaGithubSquare/>
                </a>
                <a href="#" rel="noreferrer" target="_blank">
                    <BsFillEnvelopeFill/>
                </a>
            </div>
        </>
    )
}

export default Icons;