import './index.scss';
import bootstrap from '../../../../assets/bootstrap-5-1.svg';
import css from '../../../../assets/CSS3.svg';
import html from '../../../../assets/HTML5.svg';
import javascript from '../../../../assets/Javascript.svg';
import react from '../../../../assets/reactjs-ar21.svg';
import sass from '../../../../assets/sass.svg';
import {FiExternalLink} from 'react-icons/fi';
import {DiCodeBadge} from 'react-icons/di';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card_header">
                    <img src={props.image} alt={props.projectName}/>
                </div>
                <div className="card_body">
                    <h3>{props.projectName}</h3>
                    <h5>{props.description}</h5>
                </div>
                <div className="card_footer">
                    <div className="toolset">
                        {props.bootstrap ? <img src={bootstrap} alt="bootstrap logo"/> : ''}
                        {props.css ? <img src={css} alt="css logo"/> : ''}
                        {props.html ? <img src={html} alt="html logo"/> : ''}
                        {props.javascript ? <img src={javascript} alt="javascript logo"/> : ''}
                        {props.react ? <img src={react} alt="react logo"/> : ''}
                        {props.sass ? <img src={sass} alt="sass logo"/> : ''}
                    </div>
                    <div className="links">
                        <a href={props.codeLink} rel="noreferrer">
                            <DiCodeBadge/>
                        </a>
                        <a href={props.projectLink} rel="noreferrer">
                            <FiExternalLink/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;