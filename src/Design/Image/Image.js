import "./Image.css";
import PropTypes from "prop-types";

const Image = ({className, alt, url}) => {
    return (
        <img src={url} className={className} alt={alt} />
    )
}

Image.propTypes = {
    alt: PropTypes.string,
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Image;