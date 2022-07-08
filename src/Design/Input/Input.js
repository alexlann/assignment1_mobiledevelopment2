import "./Input.css";
import PropTypes from 'prop-types';

const Input = ({ value, placeholder, onChange }) => {
    return (
        <input className="input" onChange={onChange} value={value} placeholder={placeholder}/>
    );
};

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;