import "./Heading.css";
import PropTypes from 'prop-types';

const Heading2 = ({ className, children }) => {
    return (
        <h2 className={className}>
            {children}
        </h2>
    );
};

Heading2.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
};

export default Heading2;