import './index.scss';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa';


const Icons = () => {
    return (
        <>
            <div className="icon_wrapper">
                <a className="github" href="https://github.com/aevitas1" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare/>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/stephan-vd-m/" target="_blank"
                   rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </div>
        </>
    )
}

export default Icons;