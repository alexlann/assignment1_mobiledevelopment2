import "./Heading.css";
import PropTypes from 'prop-types';

const Heading3 = ({ className, children }) => {
    return (
        <h3 className={className}>
            {children}
        </h3>
    );
};

Heading3.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
};

export default Heading3;