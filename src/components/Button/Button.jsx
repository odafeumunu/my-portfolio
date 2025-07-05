import PropTypes from "prop-types";
import "./Button.scss"

function Button({ children, className }) {
  return <button className={`btn ${className}`}><span></span>{children}</button>; 
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;









