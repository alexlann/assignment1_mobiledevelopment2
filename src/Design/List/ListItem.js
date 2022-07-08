import "./List.css";
import PropTypes from "prop-types";

const ListItem = ({children, onClick, active = false}) => {
    const clickableClass = onClick ? "list-item-clickable" : '';
    const activeClass = active ? "list-item-clickable--active" : '';
    return (
        <li onClick={onClick} className={`list-item ${activeClass} ${clickableClass}`}>
            {children}
        </li>
    )
}

ListItem.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
}

export default ListItem;