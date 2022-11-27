import './index.scss';

const Credits = () => {
    let d = new Date();
    let currentYear = d.getFullYear();

    return (
        <>
            <div className="credits">
                <p>&copy; {currentYear}</p>
            </div>
        </>
    )
}

export default Credits;