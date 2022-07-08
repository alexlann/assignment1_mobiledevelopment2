import "./Button.css";
import PropTypes from 'prop-types';

const Button = ({ className, color = "primary", onClick, children, active = true }) => {
    const activeClass = !active ? "btn--passive" : '';
    return (
        <button className={`btn btn--${color} ${className} ${activeClass}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.oneOf(["primary", "warning"]),
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.string,
};

export default Button;