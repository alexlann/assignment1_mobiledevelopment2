import Button from "../Button/Button";
import Heading2 from "../Heading/Heading2";
import PropTypes from 'prop-types';
import "./Detail.css";

const Detail = ({ children, onClose, title }) => {
    return (
        <div className="detail">
            <Button className="detail__btn-close" onClick={onClose}>
                X
            </Button>
            <Heading2>
                {title}
            </Heading2>
            {children}
        </div>
    );
};

Detail.propTypes = {
    onClose: PropTypes.func.isRequired,
    tilte: PropTypes.string,
}

export default Detail;